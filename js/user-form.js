import {isEscapeKey} from './utilites.js';
import {addNoEffect} from './photo-effects.js';

const uploadImage = document.querySelector('#upload-file');
const uploadImageForm = document.querySelector('.img-upload__overlay');
const uploadImageDescription = document.querySelector('.text__description');
const uploadImageHashtags = document.querySelector('.text__hashtags');

const uploadImageClose = document.querySelector('#upload-cancel');

function openForm () {
  uploadImageForm.classList.remove('hidden');
  addNoEffect();
  document.body.classList.add('modal-open');
}

function closeForm () {
  uploadImageForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadImage.value = '';
  uploadImageDescription.value ='';
  uploadImageHashtags.value = '';
  document.removeEventListener('keydown', onFormEscKeydown);
}

function onFormEscKeydown (evt) {
  if (uploadImageDescription === document.activeElement || uploadImageHashtags === document.activeElement) {
    return evt;
  } else {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeForm ();
    }
  }
}

uploadImage.addEventListener('change', () => {
  openForm();
  document.addEventListener('keydown', onFormEscKeydown);
});

uploadImageClose.addEventListener('click', () => {
  closeForm();
});

// Блок с подстановкой выбранного изображения

const FILE_TYPES = ['jpg', 'jpeg', 'png', 'avif'];

const fileChooser = document.querySelector('.img-upload__input');
const previewPhoto = document.querySelector('.img-upload__preview-picture');

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    previewPhoto.src = URL.createObjectURL(file);
  }
});

export {closeForm, openForm, onFormEscKeydown};
