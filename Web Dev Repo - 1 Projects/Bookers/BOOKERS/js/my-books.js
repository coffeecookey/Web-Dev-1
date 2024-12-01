document.addEventListener('DOMContentLoaded', function() {
    const myBooksContainer = document.getElementById('myBooksContainer');

    // Simulating fetching books from backend
    const books = [
        { title: 'Empire of Storms', book_description: 'First hand book in good condition...', image: 'images/book1.jpg' },
        { title: 'Kingdom of Ash', image: 'images/book2.jpg' },
        { title: '80/20 Principle', image: 'images/book3.jpg' },
        { title: 'List another book' } // The icon will be added in place of an image
    ];

    books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book-item');

        if (book.title === 'List another book') {
            // Adding the link with a Font Awesome plus icon
            bookElement.innerHTML = `
                <a href="book-listing.html">
                    <i class="fas fa-plus fa-10x" style="color: #dca308; margin-bottom: 10px;margin-top:10px;"></i>
                    <h3>${book.title}</h3>
                </a>
            `;
        } else {
            bookElement.innerHTML = `
                <img src="${book.image}" alt="${book.title}">
                <h3>${book.title}</h3>
            `;
        }
        
        myBooksContainer.appendChild(bookElement);
    });
});
