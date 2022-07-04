const bigPicture = document.querySelector('.big-picture');
const bigPictureClose = document.querySelector('.big-picture__cancel');

// Закрытие большого изображения на кнопку или клавишу ESC

function onBigPictureEscKeydown (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  }
}

bigPictureClose.addEventListener('click', ()=> {
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
});

document.addEventListener('keydown', (evt)=> {
  onBigPictureEscKeydown(evt);
});
