import {renderPhotos} from './miniatures.js';
import {shuffle, debounce} from './utilites.js';

const filterFormElement = document.querySelector('.img-filters__form');
const defaultFilterButtonElement = filterFormElement.querySelector('#filter-default');
const discussedFilterButtonElement = filterFormElement.querySelector('#filter-discussed');
const randomFilterButtonElement = filterFormElement.querySelector('#filter-random');

const showImageFilters = () => {
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
};

const clearOldPhotos = () => {
  const picturesElements = document.querySelectorAll('.picture');
  picturesElements.forEach((pictureElement) => {
    pictureElement.remove();
  });
};

const filterByTopCommented = (photos) => {
  const sortedPhotos = photos.slice().sort((a, b) => b.comments.length - a.comments.length);
  renderPhotos(sortedPhotos);
};

const filterByRandom = (photos) => {
  const sortedPhotos = shuffle(photos.slice()).slice(0, 10);
  renderPhotos(sortedPhotos);
};

const filterByDefault = (photos) => {
  renderPhotos(photos);
};

const deleteAllFilters = () => {
  defaultFilterButtonElement.classList.remove('img-filters__button--active');
  randomFilterButtonElement.classList.remove('img-filters__button--active');
  discussedFilterButtonElement.classList.remove('img-filters__button--active');
};

const addSortButtonListeners = (photos) => {
  filterFormElement.addEventListener('click', debounce((evt) => {
    clearOldPhotos();
    if (defaultFilterButtonElement === evt.target) {
      filterByDefault(photos);
    }

    if (randomFilterButtonElement === evt.target) {
      filterByRandom(photos);
    }

    if (discussedFilterButtonElement === evt.target) {
      filterByTopCommented(photos);
    }
  }));
};

discussedFilterButtonElement.addEventListener('click', () => {
  deleteAllFilters();
  discussedFilterButtonElement.classList.add('img-filters__button--active');
});

randomFilterButtonElement.addEventListener('click', () => {
  deleteAllFilters();
  randomFilterButtonElement.classList.add('img-filters__button--active');
});

defaultFilterButtonElement.addEventListener('click', () => {
  deleteAllFilters();
  defaultFilterButtonElement.classList.add('img-filters__button--active');
});

export {showImageFilters, addSortButtonListeners};
