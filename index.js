const usersContainer = document.getElementById('users');
const errorContainer = document.getElementById('error');

errorContainer.style.display = 'none';

function showError(message) {
    errorContainer.textContent = message;
    errorContainer.style.display = 'block';
}

function clearError() {
    errorContainer.textContent = '';
    errorContainer.style.display = 'none';
}

function createUserElement(user) {
    const userDiv = document.createElement('div');
    userDiv.className = 'user';
    userDiv.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
    `;
    return userDiv;
}

async function fetchUsers() {
    clearError();
    
    usersContainer.innerHTML = '';
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const users = await response.json();
        
        if (!users.length) {
            throw new Error('No users found');
        }
        
        users.forEach(user => {
            const userElement = createUserElement(user);
            usersContainer.appendChild(userElement);
        });
        
    } catch (error) {
        let errorMessage = 'An error occurred while fetching users. ';
        
        if (error instanceof TypeError) {
            errorMessage += 'Please check your internet connection.';
        } else if (error.message.includes('HTTP error')) {
            errorMessage += `Server responded with an error: ${error.message}`;
        } else if (error.message.includes('JSON')) {
            errorMessage += 'Invalid data received from server.';
        } else {
            errorMessage += error.message;
        }
        
        console.error('Error details:', error);
        
        showError(errorMessage);
    }
}

document.addEventListener('DOMContentLoaded', fetchUsers);