const button = document.getElementById('changeButton');
const title = document.getElementById('title');
const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
const texts = ['Red', 'Blue', 'Green', 'Yellow', 'Purple'];

        button.addEventListener('click', () => {
            setTimeout(() => {
                document.body.style.backgroundColor = colors[0];
                title.textContent = texts[0];
                setTimeout(() => {
                    document.body.style.backgroundColor = colors[1];
                    title.textContent = texts[1];
                    setTimeout(() => {
                        document.body.style.backgroundColor = colors[2];
                        title.textContent = texts[2];
                        setTimeout(() => {
                            document.body.style.backgroundColor = colors[3];
                            title.textContent = texts[3];
                            setTimeout(() => {
                                document.body.style.backgroundColor = colors[4];
                                title.textContent = texts[4];
                            }, 5000); 

                        }, 5000); 

                    }, 5000); 

                }, 5000); 

            }, 5000); 
        });