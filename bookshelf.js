function Bookshelf(books = []) {
  this.books = books;

  this.addBook = function (book) {
    this.books.push(book);
  };

  /* CHANGE RENDER! THIS IS A TEMPLATE */
  this.render = function () {
    const ul = document.createElement("ul");
    this.books.map((book) => ul.append(book.render()))
    const favoritesCount = this.books
        .map((book) => (book.isFavorite ? 1 : 0))
        .reduce((total, currentValue) => total + currentValue);
    document.querySelector('#favoriteCount').innerText = "Favorite Count: " + favoritesCount;
    return ul;
  };

  this.sortByAuthor = function () {
    books.sort(function(book1, book2) {
      let author1 = book1.author[0].toUpperCase();
      let author2 = book2.author[0].toUpperCase();
      if (author1 < author2) {
        return -1;
      }
      if (author1 > author2) {
        return 1;
      }
      return 0;
    })
    app.innerHTML = '';
    app.append(bookshelf.render());
  };

  this.sortByTitle = function () {
    books.sort(function(book1, book2) {
      let title1 = book1.title[0].toUpperCase();
      let title2 = book2.title[0].toUpperCase();
      if (title1 < title2) {
        return -1;
      }
      if (title1 > title2) {
        return 1;
      }
      return 0;
    })
    app.innerHTML = '';
    app.append(bookshelf.render());
  };

  this.sortByTopic = function () {
    books.sort(function(book1, book2) {
      let subject1 = book1.subject.length
      let subject2 = book2.subject.length
      if (subject1 < subject2) {
        return 1;
      }
      if (subject1 > subject2) {
        return -1;
      }
      return 0;
    })
    app.innerHTML = '';
    app.append(bookshelf.render());
  };

  const sortByAuthor = document.querySelector('#sortByAuthor');
  sortByAuthor.addEventListener('click', this.sortByAuthor);

  const sortByTitle = document.querySelector('#sortByTitle');
  sortByTitle.addEventListener('click', this.sortByTitle);

  const sortByTopic = document.querySelector('#sortByTopic');
  sortByTopic.addEventListener('click', this.sortByTopic);
}