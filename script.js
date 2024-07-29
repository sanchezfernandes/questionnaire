document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');

    const inputs = document.querySelectorAll('.input');
    inputs.forEach(input => {
        input.addEventListener('input', handleInputChange);
    });

    form.addEventListener('submit', handleFormSubmit);
});

function handleInputChange(event) {
    const input = event.target;
    console.log(`Changed value in ${input.previousElementSibling.textContent}: ${input.value}`);
}

function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    let allFieldsFilled = true;
    let emptyFields = [];

    formData.forEach((value, key) => {
        if (!value.trim()) {
            allFieldsFilled = false;
            emptyFields.push(key);
        }
        console.log(`${key}: ${value}`);
    });

    if (!allFieldsFilled) {
        alert(`Please fill out the following fields: ${emptyFields.join(', ')}`);
    } else {
        alert('Form submitted successfully!');
        form.submit();
    }
}