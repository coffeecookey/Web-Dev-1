document.addEventListener('DOMContentLoaded', function() {
    const booksAvailableContainer = document.getElementById('booksAvailableContainer');

    // Simulating fetching available books from backend
    const availableBooks = [
        { title: 'Book Four', image: 'images/book4.jpg' },
        { title: 'Book Five', image: 'images/book5.jpg' },
        { title: 'Book Six', image: 'images/book6.jpg' }
    ];

    availableBooks.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book-item');
        bookElement.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
        `;
        booksAvailableContainer.appendChild(bookElement);
    });
});
