class ArticleTitle {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.article;
    this.itemElement = document.querySelector(
      `.article-content[data-article='${this.data}']`
    );
    // console.log(`item element`, this.itemElement);
    this.articleItem = new ArticleItem(this.itemElement);
    console.log(`new ArticleItem`, this.articleItem);
    this.element.addEventListener('click', () => this.selected());
    console.log(`this.element`, this.element);
  }
  selected() {
    console.log(`'this' inside of selected()`, this);
    // const articles = document.querySelectorAll('.article-content');
    // Array.from(articles).forEach(article => {
    //   article.classList.remove('show');
    // });
    // this.element.classList.add('show');
    this.articleItem.select();
  }
}

class ArticleItem {
  constructor(element) {
    this.element = element;
    console.log(`this.element inside ArticleItem constructor`, this.element);
  }
  select() {
    console.log(`'this' inside of select()`, this);
    const articles = document.querySelectorAll('.article-content');
    Array.from(articles).forEach(article => {
      article.classList.remove('show', 'fadeIn');
    });
    this.element.classList.add('show', 'fadeIn');
  }
}

let articleTitles = document.querySelectorAll('.article-title');

articleTitles.forEach(articleTitle => {
  new ArticleTitle(articleTitle);
});
