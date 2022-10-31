function Book(author, language, subject, title) {
  this.author = author;
  this.language = language;
  this.subject = subject;
  this.title = title;
  this.isFavorite = false;

  /* CHANGE RENDER! THIS IS A TEMPLATE */
  this.render = function () {
    let fontWeight = this.isFavorite ? 'bold' : 'normal';
    let buttonStyle = this.isFavorite ? 'lightgreen' : 'none';
    const li = document.createElement("li");
    li.style.fontWeight = fontWeight;
    const button = document.createElement("button");
    button.addEventListener('click', this.changeFavorite)
    button.innerText = 'favorite';
    button.style.backgroundColor = buttonStyle;
    li.textContent = this.title;
    li.append(button);
    return li;
  };
  this.changeFavorite = () => {
    this.isFavorite = !this.isFavorite;
    app.innerHTML = '';
    app.append(bookshelf.render());
    /*This completely clears the dom and redraws it, not the best solution but it works. Thank you James <3*/
  };
}


