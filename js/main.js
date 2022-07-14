import {createPhotos} from './data.js';
import {getRandomInteger, isEscapeKey, debounce} from './utilites.js';
import {renderPhotos} from './miniatures.js';
import './big-photo.js';
import './user-form.js';
import {setUserFormSubmit} from './user-form-validate.js';
import './scale.js';
import './photo-effects.js';
import {closeForm} from './user-form.js';
import {getData} from './api.js';
import {showImageFilters, addSortButtonListeners} from './filter.js';

function onSuccess (photos) {
  renderPhotos(photos);
  addSortButtonListeners(photos);
  showImageFilters();
}

getData(onSuccess);

setUserFormSubmit(closeForm);
