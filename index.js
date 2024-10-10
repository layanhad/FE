const usersContainer = document.getElementById('users');
const errorContainer = document.getElementById('error');

    function fetchUsers() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(users => {
                users.forEach(user => {
                    const userDiv = document.createElement('div');
                    userDiv.className = 'user';
                    userDiv.innerHTML = `<h2>${user.name}</h2><p><strong>Email:</strong> ${user.email}</p>`;
                    usersContainer.appendChild(userDiv);
                });
            })
            .catch(error => {
                console.error('Error fetching users:', error);
                errorContainer.textContent = `An error occurred: ${error.message}. Please try again later.`;
            });
    }

    fetchUsers();