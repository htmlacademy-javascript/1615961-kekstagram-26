import {isEscapeKey} from './utilites.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureClose = document.querySelector('.big-picture__cancel');

// Закрытие большого изображения на кнопку или клавишу ESC

function closeBigPicture () {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onBigPictureEscKeydown);
}

function onBigPictureEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
}

bigPictureClose.addEventListener('click', ()=> {
  closeBigPicture();
});

export {onBigPictureEscKeydown};
