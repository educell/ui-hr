console.log(`index.js linked`);
class Article {
  constructor(article) {
    this.article = article;
    this.toggleBtn = article.querySelector('.show-more');
    this.icon = article.querySelector('.fas');
    this.articleContent = article.querySelector('.article-content');
    this.toggleBtn.addEventListener('click', () => this.showArticle());
  }

  showArticle() {
    this.articleContent.classList.toggle('show');
    if (this.icon.classList.contains('fa-chevron-down')) {
      this.icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
    } else {
      this.icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
    }
  }
}

const articles = document.querySelectorAll('.article');

articles.forEach(article => {
  new Article(article);
});
