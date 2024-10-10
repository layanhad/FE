const usersURL = 'https://jsonplaceholder.typicode.com/users';
const postsURL = 'https://jsonplaceholder.typicode.com/posts';

const usersPromise = fetch(usersURL).then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
});

const postsPromise = fetch(postsURL).then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
});

Promise.all([usersPromise, postsPromise])
    .then(([users, posts]) => {
        const usersContainer = document.getElementById('users');
        users.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.classList.add('item');
            userDiv.innerHTML = `<strong>${user.name}</strong><br>${user.email}`;
            usersContainer.appendChild(userDiv);
        });

        const postsContainer = document.getElementById('posts');
        posts.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.classList.add('item');
            postDiv.innerHTML = `<strong>${post.title}</strong><br>${post.body}`;
            postsContainer.appendChild(postDiv);
        });
    })
    .catch(error => {
        const errorContainer = document.getElementById('error');
        errorContainer.textContent = `An error occurred: ${error.message}`;
    });