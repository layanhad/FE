const BASE_URL = 'https://jsonplaceholder.typicode.com';
const usersContainer = document.getElementById('users');

const style = document.createElement('style');
style.textContent = `
  .error-message {
    color: #dc3545;
    padding: 10px;
    background-color: #f8d7da;
    border-radius: 5px;
    margin: 10px 0;
  }
`;
document.head.appendChild(style);

function showError(container, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    container.appendChild(errorDiv);
}

async function fetchUsers() {
    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) {
        throw new Error(`Failed to fetch users. Status: ${response.status}`);
    }
    return await response.json();
}

async function fetchPosts(userId) {
    const response = await fetch(`${BASE_URL}/posts?userId=${userId}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch posts for user ${userId}. Status: ${response.status}`);
    }
    return await response.json();
}

function createUserElement(user) {
    const userDiv = document.createElement('div');
    userDiv.className = 'user';
    userDiv.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Company:</strong> ${user.company.name}</p>
        <p><strong>Website:</strong> ${user.website}</p>
        <div class="posts"></div>
    `;
    return userDiv;
}

function createPostElement(post) {
    const postDiv = document.createElement('div');
    postDiv.className = 'post';
    postDiv.innerHTML = `
        <strong>${post.title}</strong>
        <p>${post.body}</p>
    `;
    return postDiv;
}

async function displayUsersAndPosts() {
    try {
        const users = await fetchUsers();
        
        for (const user of users) {
            const userElement = createUserElement(user);
            usersContainer.appendChild(userElement);

            const postsContainer = userElement.querySelector('.posts');

            try {
                const posts = await fetchPosts(user.id);
                posts.forEach(post => {
                    const postElement = createPostElement(post);
                    postsContainer.appendChild(postElement);
                });
            } catch (error) {
                showError(postsContainer, `Error loading posts: ${error.message}`);
            }
        }
    } catch (error) {
        showError(usersContainer, `Error loading users: ${error.message}`);
    }
}

document.addEventListener('DOMContentLoaded', displayUsersAndPosts);