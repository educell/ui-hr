const modal = document.getElementById('modal');
const btn = document.getElementById('modal-btn');
const span = document.getElementsByClassName('close')[0];
const form = document.querySelector('.pure-button-primary');

btn.addEventListener('click', () => {
  modal.classList.add('show');
  modal.classList.add('fadeIn');
});

span.addEventListener('click', () => {
  modal.classList.remove('show');
});

// span.addEventListener('click', () => {
//   modal.classList.add('fadeOut');
//   setTimeout(disappear, 600);
// });

window.addEventListener('click', e => {
  if (e.target === modal) {
    // modal.classList.add('fadeOut');
    // setTimeout(disappear, 600);
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
