import {renderPhotos} from './miniatures.js';
import {shuffle, debounce} from './utilites.js';

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
  const sortedPhotos = photos.slice().sort((a, b) => b.comments.length - a.comments.length);
  renderPhotos(sortedPhotos);
}

function filterByRandom (photos) {
  const sortedPhotos = shuffle(photos.slice()).slice(0, 10);
  renderPhotos(sortedPhotos);
}

function filterByDefault (photos) {
  renderPhotos(photos);
}

function deleteAllFilters () {
  defaultFilterButton.classList.remove('img-filters__button--active');
  randomFilterButton.classList.remove('img-filters__button--active');
  discussedFilterButton.classList.remove('img-filters__button--active');
}

function addSortButtonListeners (photos) {

  discussedFilterButton.addEventListener('click', debounce(() => {
    clearOldPhotos();
    filterByTopCommented(photos);
  }));
  discussedFilterButton.addEventListener('click', () => {
    deleteAllFilters();
    discussedFilterButton.classList.add('img-filters__button--active');
  });

  randomFilterButton.addEventListener('click', debounce(() => {
    clearOldPhotos();
    filterByRandom(photos);
  }));
  randomFilterButton.addEventListener('click', () => {
    deleteAllFilters();
    randomFilterButton.classList.add('img-filters__button--active');
  });

  defaultFilterButton.addEventListener('click', debounce(() => {
    clearOldPhotos();
    filterByDefault(photos);
  }));
  defaultFilterButton.addEventListener('click', () => {
    deleteAllFilters();
    defaultFilterButton.classList.add('img-filters__button--active');
  });
}

export {showImageFilters, addSortButtonListeners};
