import {isEscapeKey} from './utilites.js';

const uploadImage = document.querySelector('#upload-file');
const uploadImageForm = document.querySelector('.img-upload__overlay');
const uploadImageDescription = document.querySelector('.text__description');
const uploadImageHashtags = document.querySelector('.text__hashtags');

const uploadImageClose = document.querySelector('#upload-cancel');

function OpenForm () {
  uploadImageForm.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
}

function CloseForm () {
  uploadImageForm.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  uploadImage.value = '';
  uploadImageDescription.value ='';
  uploadImageHashtags.value = '';
}

function onFormEscKeydown (evt) {
  if (uploadImageDescription === document.activeElement) {
    return evt;
  } else {
    if (uploadImageHashtags === document.activeElement) {
      return evt;
    } else {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        CloseForm ();
      }
    }
  }
}

uploadImage.addEventListener('change', () => {
  OpenForm();
});

uploadImageClose.addEventListener('click', () => {
  CloseForm();
});

document.addEventListener('keydown', (evt)=> {
  onFormEscKeydown(evt);
});
