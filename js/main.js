import {createPhotos} from './data.js';
import {getRandomInteger, isEscapeKey} from './utilites.js';
import {renderPhotos} from './miniatures.js';
import './big-photo.js';
import './user-form.js';
import {setUserFormSubmit} from './user-form-validate.js';
import './scale.js';
import './photo-effects.js';
import {closeForm} from './user-form.js';


fetch('https://26.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((photos) => {
    renderPhotos(photos);
  }
  );

setUserFormSubmit(closeForm);
