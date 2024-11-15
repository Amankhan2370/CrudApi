const apiURL = 'https://jsonplaceholder.typicode.com/users';

document.getElementById('create-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;

    try {
        const response = await fetch(apiURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, username }),
        });
        const newUser = await response.json();
        alert("User created successfully!");
        window.location.href = "index.html";
    } catch (error) {
        console.error("Error creating user:", error);
    }
});
