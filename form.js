function addField() {
    const form = document.getElementById('dynamicForm');
    const input = document.createElement('input');
    form.appendChild(input);
}

function submitForm(){
    const inputs = document.querySelectorAll('#dynamicForm input');
    let allFilled = true;
    let message = '';

    inputs.forEach(input => {
        if (input.value === '') {
            allFilled = false;
        }
        message += input.value + ' ';
    });

    if (!allFilled) {
        alert('Please fill all fields.');
    } else {
        alert('Submitted values: ' + message);
    }
}

document.addEventListener('DOMLoaded', function() {
    const addButton = document.querySelector('#dynamicForm button:first-of-type');
    const submitButton = document.querySelector('#dynamicForm button:last-of-type');

    addButton.addEventListener('click', addField);
    submitButton.addEventListener('click', submitForm);
});