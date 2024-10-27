const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');

const togglrMovieModal = () => {
  addMovieModal.classList.toggle('visible');
};

startAddMovieButton.addEventListener('click',togglrMovieModal);
