import {renderPhotos} from './miniatures.js';

// Функция показа переключателей фильтров
function showImageFilters () {
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
}

const defaultFilterButton = document.querySelector('#filter-default');
const discussedFilterButton = document.querySelector('#filter-discussed');
const randomFilterButton = document.querySelector('#filter-random');

defaultFilterButton.addEventListener('click', () => {
  discussedFilterButton.classList.remove('img-filters__button--active');
  randomFilterButton.classList.remove('img-filters__button--active');
  defaultFilterButton.classList.add('img-filters__button--active');
});

discussedFilterButton.addEventListener('click', () => {
  defaultFilterButton.classList.remove('img-filters__button--active');
  randomFilterButton.classList.remove('img-filters__button--active');
  discussedFilterButton.classList.add('img-filters__button--active');
});

randomFilterButton.addEventListener('click', () => {
  discussedFilterButton.classList.remove('img-filters__button--active');
  defaultFilterButton.classList.remove('img-filters__button--active');
  randomFilterButton.classList.add('img-filters__button--active');
});


function filtres (photos) {
  // Фильтры
}

// Три функции по каждому фильтру, каждая из этих функций принимает фотос на вход.
// В каждой функции слайс по фотос. Отфильтровать новый слайсовый массив и вызвать РендерФотос и внее передать, что нафильтровал
// И дальше внутри Фильтрес с 3 строки на каждую кнопку обработчик и передаю соответствующую функцию


function filterPhotos (photos) {

  if (defaultFilterButton.classList.contains('img-filters__button--active')) {
    return photos;
  }


  if (discussedFilterButton.classList.contains('img-filters__button--active')) {

    const sortedPhotos = photos.slice().sort((photoA, photoB) => photoB.comments.length - photoA.comments.length);

    return sortedPhotos;
  }
}

// const sameFilterButtons = document.querySelectorAll('.img-filters__button');

// sameFilterButtons.addEventListener('click', () => {
//   renderPhotos(filterPhotos());
// });

export {showImageFilters};
