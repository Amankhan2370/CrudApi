const apiURL = 'https://jsonplaceholder.typicode.com/users';
const params = new URLSearchParams(window.location.search);
const userId = params.get('id');

async function fetchUserDetails() {
    try {
        const response = await fetch(`${apiURL}/${userId}`);
        const user = await response.json();

        const userDetails = document.getElementById('user-details');
        userDetails.innerHTML = `
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
            <p>Username: ${user.username}</p>
            <p>Phone: ${user.phone}</p>
            <p>Website: ${user.website}</p>
            <p>Company: ${user.company.name}</p>
            <p>Address: ${user.address.street}, ${user.address.city}</p>
        `;
    } catch (error) {
        console.error("Error fetching user details:", error);
    }
}

window.onload = fetchUserDetails;
