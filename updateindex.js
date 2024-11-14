const apiURL = 'https://jsonplaceholder.typicode.com/users';

async function fetchBooks() {
    try {
        const response = await fetch(apiURL);
        const authors = await response.json();
        
        const limitedAuthors = authors.slice(0, 10);

        const bookList = document.getElementById('book-list');
        limitedAuthors.forEach(author => {
            const authorDiv = document.createElement('div');
            authorDiv.innerHTML = `
                <a href="#">${author.name}</a>
                <p>Email: ${author.email}</p>
                <p>Username: ${author.username}</p>
            `;
            bookList.appendChild(authorDiv);
        });
    } catch (error) {
        console.error("Error fetching authors:", error);
    }
}

window.onload = fetchBooks;
