const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const togglrMovieModal = () => {
  addMovieModal.classList.toggle('visible');
  toggleBackdrop();
};

startAddMovieButton.addEventListener('click', togglrMovieModal);
