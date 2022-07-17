import {isEscapeKey} from './utilites.js';
import {onNoEffectChange} from './photo-effects.js';
import {addDefaultScale} from './scale.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png', 'avif'];

const uploadImageElement = document.querySelector('#upload-file');
const uploadImageFormElement = document.querySelector('.img-upload__overlay');
const uploadImageDescriptionElement = document.querySelector('.text__description');
const uploadImageHashtagsElement = document.querySelector('.text__hashtags');
const uploadImageCloseButtonElement = document.querySelector('#upload-cancel');

function openForm () {
  uploadImageFormElement.classList.remove('hidden');
  onNoEffectChange();
  addDefaultScale();
  document.body.classList.add('modal-open');
}

function closeForm () {
  uploadImageFormElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadImageElement.value = '';
  uploadImageDescriptionElement.value ='';
  uploadImageHashtagsElement.value = '';
  document.removeEventListener('keydown', onFormEscKeydown);
}

function onFormEscKeydown (evt) {
  if (uploadImageDescriptionElement === document.activeElement || uploadImageHashtagsElement === document.activeElement) {
    return evt;
  }
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeForm ();
  }
}

uploadImageElement.addEventListener('change', () => {
  openForm();
  document.addEventListener('keydown', onFormEscKeydown);
});

uploadImageCloseButtonElement.addEventListener('click', () => {
  closeForm();
});

// Блок с подстановкой выбранного изображения

const fileChooserElement = document.querySelector('.img-upload__input');
const previewPhotoElement = document.querySelector('.img-upload__preview-picture');

fileChooserElement.addEventListener('change', () => {
  const file = fileChooserElement.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    previewPhotoElement.src = URL.createObjectURL(file);
  }
});

export {closeForm, openForm, onFormEscKeydown};
