import {renderPhotos} from './miniatures.js';
import {shuffle} from './utilites.js';

function showImageFilters () {
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
}

function clearOldPhotos () {
  const pictures = document.querySelectorAll('.picture');
  pictures.forEach((picture) => {
    picture.remove();
  });
}

const defaultFilterButton = document.querySelector('#filter-default');
const discussedFilterButton = document.querySelector('#filter-discussed');
const randomFilterButton = document.querySelector('#filter-random');

function filterByTopCommented (photos) {
  for (let i = photos.length - 1; i > 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      let maxCommentAmount = photos[i].comments.length;
      if (photos[j].comments.length < maxCommentAmount) {
        maxCommentAmount = photos[j].comments.length;
        const swap = photos[i];
        photos[i] = photos[j];
        photos[j] = swap;
      }
    }
  }
  const sortedPhotos = photos;
  renderPhotos(sortedPhotos);
}

function filterByRandom (photos) {
  const sortedPhotos = shuffle(photos).slice(0, 10);
  renderPhotos(sortedPhotos);
}

function filterByDefault (photos) {
  for (let i = 0; i <= photos.length - 2; i++) {
    let minId = photos[i].id;
    for (let j = i + 1; j <= photos.length - 1; j++) {
      if (photos[j].id < minId) {
        minId = photos[j].id;
        const swap = photos[i];
        photos[i] = photos[j];
        photos[j] = swap;
      }
    }
  }
  const sortedPhotos = photos;
  renderPhotos(sortedPhotos);
}


function addSortButtonListeners (photos) {

  discussedFilterButton.addEventListener('click', () => {
    defaultFilterButton.classList.remove('img-filters__button--active');
    randomFilterButton.classList.remove('img-filters__button--active');
    discussedFilterButton.classList.add('img-filters__button--active');
    clearOldPhotos();
    filterByTopCommented(photos);
  });

  randomFilterButton.addEventListener('click', () => {
    discussedFilterButton.classList.remove('img-filters__button--active');
    defaultFilterButton.classList.remove('img-filters__button--active');
    randomFilterButton.classList.add('img-filters__button--active');
    clearOldPhotos();
    filterByRandom(photos);
  });

  defaultFilterButton.addEventListener('click', () => {
    discussedFilterButton.classList.remove('img-filters__button--active');
    randomFilterButton.classList.remove('img-filters__button--active');
    defaultFilterButton.classList.add('img-filters__button--active');
    clearOldPhotos();
    filterByDefault(photos);
  });
}

export {showImageFilters, addSortButtonListeners};
