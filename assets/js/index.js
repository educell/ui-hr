// accordion
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
    this.articleContent.classList.add('fadeIn');
    if (this.icon.classList.contains('fa-chevron-down')) {
      this.icon.classList.replace('fa-chevron-down', 'fa-times-square');
    } else {
      this.icon.classList.replace('fa-times-square', 'fa-chevron-down');
    }
  }
}

const articles = document.querySelectorAll('.article');

articles.forEach(article => {
  new Article(article);
});

// cheeseburger menu
const nav = document.querySelector('nav');
const menu = document.querySelector('.menu-toggle');
menu.addEventListener('click', () => {
  nav.classList.toggle('fadeIn');
  nav.classList.toggle('active');
});

$(document).ready(function() {
  console.log('ready!');
});
