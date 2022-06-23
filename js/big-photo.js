const bigPicture = document.querySelector('.big-picture');
const bigPictureClose = document.querySelector('.big-picture__cancel');

// Закрытие большого изображения на кнопку или клавишу ESC

bigPictureClose.addEventListener('click', ()=> {
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
});

document.addEventListener('keydown', (evt)=> {
  if (evt.keyCode === 27) {
    bigPicture.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  }
});
