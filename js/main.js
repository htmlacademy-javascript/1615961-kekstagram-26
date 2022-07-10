import {createPhotos} from './data.js';
import {getRandomInteger, isEscapeKey} from './utilites.js';
import {renderPhotos} from './miniatures.js';
import './big-photo.js';
import './upload-image.js';
import './user-form.js';
import './scale.js';
import './photo-effects.js';


fetch('https://26.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((photos) => {
    console.log(photos);
    renderPhotos(photos);
  });
