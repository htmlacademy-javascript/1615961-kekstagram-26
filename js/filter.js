import {renderPhotos} from './miniatures.js';

// Функция показа переключателей фильтров
function showImageFilters () {
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
}

const defaultFilterButton = document.querySelector('#filter-default');
const discussedFilterButton = document.querySelector('#filter-discussed');
const randomFilterButton = document.querySelector('#filter-random');
// const filterButtons = document.querySelectorAll('.img-filters__button');

defaultFilterButton.addEventListener('click', (photos) => {
  discussedFilterButton.classList.remove('img-filters__button--active');
  randomFilterButton.classList.remove('img-filters__button--active');
  defaultFilterButton.classList.add('img-filters__button--active');
  filterPhotos(photos);
});

discussedFilterButton.addEventListener('click', (photos) => {
  defaultFilterButton.classList.remove('img-filters__button--active');
  randomFilterButton.classList.remove('img-filters__button--active');
  discussedFilterButton.classList.add('img-filters__button--active');
  filterPhotos(photos);
});

randomFilterButton.addEventListener('click', () => {
  discussedFilterButton.classList.remove('img-filters__button--active');
  defaultFilterButton.classList.remove('img-filters__button--active');
  randomFilterButton.classList.add('img-filters__button--active');
  filterPhotos();
});

// Три функции по каждому фильтру, каждая из этих функций принимает фотос на вход.
// В каждой функции слайс по фотос. Отфильтровать новый слайсовый массив и вызвать РендерФотос и в нее передать, что нафильтровал
// И дальше внутри Фильтрес с 3 строки на каждую кнопку обработчик и передаю соответствующую функцию
// function filtres (photos) {

//   discussedFilterButton.addEventListener('click', (photos) => {
//     filterByTopCommented(photos);
//   });

//   defaultFilterButton.addEventListener('click', (photos) => {
//     filterByDefault(photos);
//   });
// }

// function filterByDefault (photos) {
//   renderPhotos(photos);
// }

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
  renderPhotos(photos);
}

// function filterByTopCommented (photos) {
//   for (let i = 0; i <= photos.length - 2; i++) {
//     let minCommentAmount = photos[i].comments.length;
//     for (let j = i + 1; j <=  photos.length - 1; j++) {
//       if (photos[j].comments.length < minCommentAmount) {
//         minCommentAmount = photos[j].comments.length;
//         let swap = photos[i];
//         photos[i] = photos[j];
//         photos[j] = swap;
//       }
//     }
//   }
// }

function filterPhotos (photos) {

  if (defaultFilterButton.classList.contains('img-filters__button--active')) {
    return photos;
  }

  if (discussedFilterButton.classList.contains('img-filters__button--active')) {

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

    // const sortedPhotos = photos;
    return photos;
  }

  if (randomFilterButton.classList.contains('img-filters__button--active')) {
    return photos;
  }
}

// defaultFilterButton.addEventListener('click', filterPhotos);
// discussedFilterButton.addEventListener('click', filterPhotos);

export {showImageFilters, filterByTopCommented, filterPhotos};
