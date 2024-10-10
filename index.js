fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(users => {
            const usersContainer = document.getElementById('users');
            users.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.className = 'user';
                userDiv.innerHTML = `
                    <h2>${user.name}</h2>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <div class="posts"></div>
                `;
                usersContainer.appendChild(userDiv);

                fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
                    .then(response => {
                        if (!response.ok) throw new Error('Network response was not ok');
                        return response.json();
                    })
                    .then(posts => {
                        const postsContainer = userDiv.querySelector('.posts');
                        const postsHeader = document.createElement('h3');
                        postsHeader.textContent = 'Posts';
                        postsContainer.appendChild(postsHeader);

                        posts.forEach(post => {
                            const postDiv = document.createElement('div');
                            postDiv.className = 'post';
                            postDiv.innerHTML = `<strong>${post.title}</strong><br>${post.body}`;
                            postsContainer.appendChild(postDiv);
                        });
                    })
                    .catch(error => console.error('Error fetching posts:', error));
            });
        })
    .catch(error => console.error('Error fetching users:', error));