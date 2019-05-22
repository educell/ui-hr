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

const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false;

const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  const current = document.querySelector('.current');
  current.classList.remove('current');
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');
  } else {
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  const current = document.querySelector('.current');
  current.classList.remove('current');
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add('current');
  } else {
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

next.addEventListener('click', e => {
  nextSlide();
});

prev.addEventListener('click', e => {
  prevSlide();
});
