import {createPhotos} from './data.js';
import {getRandomInteger, isEscapeKey} from './utilites.js';
import {renderPhotos} from './miniatures.js';
import './big-photo.js';
import './user-form.js';
import {setUserFormSubmit} from './user-form-validate.js';
import './scale.js';
import './photo-effects.js';
import {closeForm} from './user-form.js';
import {getData} from './api.js';
import {showImageFilters, filterByTopCommented, filterPhotos} from './filter.js';

// getData((photos) => {
//   renderPhotos(photos);
//   console.log(photos);
//   const filteredPhotos = photos.slice(0, 10);
//   console.log(filteredPhotos);
//   setTimeout(showImageFilters, 1000);
// });

function onSuccess (photos) {
  // вызов filters ();
  filterPhotos(photos);
  renderPhotos(photos);
  console.log(photos);
  showImageFilters();
}

getData(onSuccess);

setUserFormSubmit(closeForm);
