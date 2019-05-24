const modal = document.getElementById('modal');
const btn = document.getElementById('modal-btn');
const span = document.getElementsByClassName('close')[0];
const form = document.querySelector('.btn');

btn.addEventListener('click', () => {
  modal.classList.add('show');
  modal.classList.add('fadeIn');
});

span.addEventListener('click', () => {
  modal.classList.remove('show');
});

window.addEventListener('click', e => {
  if (e.target === modal) {
    disappear();
  }
});

let disappear = () => {
  modal.classList.remove('show');
};

form.addEventListener('click', e => {
  e.preventDefault();
  alert(`Coming Soon`);
});
