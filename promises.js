const button = document.getElementById('changeButton');
const title = document.getElementById('title');

const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
const texts = ['Red', 'Blue', 'Green', 'Yellow', 'Purple'];

        function changeContent(index) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    document.body.style.backgroundColor = colors[index];
                    title.textContent = texts[index];
                    resolve(); 
                }, 5000);
            });
        }

        button.addEventListener('click', () => {
            changeContent(0)
                .then(() => changeContent(1)) 
                .then(() => changeContent(2)) 
                .then(() => changeContent(3)) 
                .then(() => changeContent(4))
                .catch((error) => {
                    console.error('An error occurred:', error); 
                });
        });