const checkbox = document.getElementById('triggerRejection');
const button = document.getElementById('triggerPromise');
const messageDiv = document.getElementById('message');

button.addEventListener('click', () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (checkbox.checked) {
                reject('The Promise has been rejected!');
            } else {
                resolve('The Promise has been resolved!');
            }
        }, 1000); 
    });

    promise
        .then((message) => {
            messageDiv.textContent = message;
            messageDiv.classList.add('resolved');
            messageDiv.classList.remove('rejected');
        })
        .catch((error) => {
            messageDiv.textContent = error;
            messageDiv.classList.add('rejected');
            messageDiv.classList.remove('resolved');
        });
});
