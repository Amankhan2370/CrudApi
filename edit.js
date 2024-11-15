const apiURL = 'https://jsonplaceholder.typicode.com/users';
const params = new URLSearchParams(window.location.search);
const userId = params.get('id');

async function fetchUserData() {
    const response = await fetch(`${apiURL}/${userId}`);
    const user = await response.json();
    document.getElementById('name').value = user.name;
    document.getElementById('email').value = user.email;
    document.getElementById('username').value = user.username;
}

document.getElementById('edit-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;

    try {
        await fetch(`${apiURL}/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, username }),
        });
        alert("User updated successfully!");
        window.location.href = "index.html";
    } catch (error) {
        console.error("Error updating user:", error);
    }
});

window.onload = fetchUserData;
