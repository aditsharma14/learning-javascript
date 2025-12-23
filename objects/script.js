let books = [];

function addBook() {
    const bookName = document.getElementById('bookName').value.trim();
    const authorName = document.getElementById('authorName').value.trim();
    const bookDescription = document.getElementById('bookDescription').value.trim();
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value, 10);

    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = { name: bookName, authorName, bookDescription, pagesNumber };
        books.push(book);
        showbooks();
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
}

function escapeHTML(str = '') {
    return String(str).replace(/[&<>"']/g, (s) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"})[s]);
}

function showbooks() {
    const el = document.getElementById('books');
    if (!books.length) {
        el.innerHTML = '<p class="muted">No books added yet.</p>';
        return;
    }

    el.innerHTML = books.map((book, index) => `
        <div class="book-card">
            <h3>Book #${index + 1}</h3>
            <p><strong>Book Name:</strong> ${escapeHTML(book.name)}</p>
            <p><strong>Author Name:</strong> ${escapeHTML(book.authorName)}</p>
            <p><strong>Book Description:</strong> ${escapeHTML(book.bookDescription)}</p>
            <p><strong>No. of Pages:</strong> ${escapeHTML(book.pagesNumber)} page(s)</p>
            <div class="card-actions"><button onclick="editbook(${index})">Edit</button></div>
        </div>
    `).join('');
}

function editbook(index) {
    if (index < 0 || index >= books.length) return;
    const book = books[index];
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pagesNumber').value = book.pagesNumber;
    books.splice(index, 1); // remove old entry, user can re-add
    showbooks();
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}
