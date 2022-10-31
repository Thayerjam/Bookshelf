const app = document.querySelector('#app');

const bookshelf = new Bookshelf();

// Load in book data
for (const bookInfo of bookData) {
  const book = new Book(
    bookInfo.author,
    bookInfo.language,
    bookInfo.subject,
    bookInfo.title
  );
  bookshelf.addBook(book);
}

app.append(bookshelf.render());

const dropdownTextDisplay = document.querySelector('#dropdownTextDisplay');
const dropdownButtons = document.querySelectorAll('a');
dropdownButtons.forEach((button) => button.addEventListener('click', changeSort))

function changeSort() {
  dropdownTextDisplay.innerHTML = "Sort by: " + this.innerHTML;
}