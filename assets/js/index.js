console.log(`index.js linked`);
class Article {
  constructor(article) {
    this.article = article;
    this.data = this.article.dataset.article;
    this.articleElement = document.querySelector(
      `.show-more[data-article="${this.data}"]`
    );
    this.article.addEventListener('click', () => this.showArticle());
  }

  showArticle() {
    const indArticle = document.querySelectorAll('.article-content');
    Array.from(indArticle).forEach(el => {
      el.classList.remove('show');
    });
    console.log(`clicked`);
  }
}

const articles = document.querySelectorAll('.article-content');

articles.forEach(article => {
  new Article(article);
});
