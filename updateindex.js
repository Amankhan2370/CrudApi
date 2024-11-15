const apiURL = 'https://jsonplaceholder.typicode.com/users';

async function fetchUsers() {
    try {
        const response = await fetch(apiURL);
        const users = await response.json();
        
        const userList = document.getElementById('user-list');
        userList.innerHTML = ''; // Clear previous content

        users.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.innerHTML = `
                <h3>${user.name}</h3>
                <p>Email: ${user.email}</p>
                <p>Username: ${user.username}</p>
                <a href="detail.html?id=${user.id}">Details</a>
                <button onclick="editUser(${user.id})">Edit</button>
                <button onclick="deleteUser(${user.id})">Delete</button>
            `;
            userList.appendChild(userDiv);
        });
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

window.onload = fetchUsers;
