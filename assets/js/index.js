class ArticleButton {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.article;
    this.itemElement = document.querySelector(
      `.article-content[data-article='${this.data}']`
    );
    console.log(`item element`, this.itemElement);
    this.articleItem = new ArticleItem(this.itemElement);
    console.log(`article item`, this.articleItem);
    this.element.addEventListener('click', () => this.select());
  }
  select() {
    const articles = document.querySelectorAll('.article-content');
    Array.from(articles).forEach(article => {
      article.classList.remove('show');
    });
    this.element.classList.add('show');
    this.articleItem.select();
  }
}

class ArticleItem {
  constructor(element) {
    this.element = element;
  }
  select() {
    const articles = document.querySelectorAll('.article-content');
    Array.from(articles).forEach(article => {
      article.classList.remove('show');
    });
    this.element.classList.add('show', 'fadeIn');
  }
}

let articles = document.querySelectorAll('.article-title');

articles.forEach(article => {
  new ArticleButton(article);
});
