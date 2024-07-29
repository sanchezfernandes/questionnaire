document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        typeEffect(document.getElementById('typedBanner'), "Hey there!! I'm excited to work with you", 0, () => {
            typeEffect(document.getElementById('typedBannerMessage'), "Please take a few minutes to tell me more about you and your vision");
        });
    }, 1000);

    const form = document.getElementById('form');
    const inputs = document.querySelectorAll('.input');
    inputs.forEach(input => {
        input.addEventListener('input', handleInputChange);
    });
    form.addEventListener('submit', handleFormSubmit);
});

function typeEffect(element, text, delay = 0, callback) {
    let index = 0;
    function addLetter() {
        if (index < text.length) {
            element.textContent += text[index];
            index++;
            setTimeout(addLetter, 100);
        } else if (callback) {
            callback();
        }
    }
    setTimeout(addLetter, delay);
}

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