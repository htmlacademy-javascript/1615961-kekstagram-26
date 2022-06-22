import {createPhotos} from './data.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureClose = document.querySelector('.big-picture__cancel');
const bigPictureImg = bigPicture.querySelector('img');
const smallPicture = document.querySelectorAll('.picture');

// Нажатие на миниаютюру выводит большое изображение, комментарии и лайки

for (let i = 0; i < smallPicture.length; i++) {
  smallPicture[i].addEventListener('click', ()=> {
    bigPicture.classList.remove('hidden');
    bigPictureImg.src = createPhotos()[i].url;
  });}

// Закрытие большого изображения на кнопку или клавишу ESC

bigPictureClose.addEventListener('click', ()=> {
  bigPicture.classList.add('hidden');
});

document.addEventListener('keydown', (evt)=> {
  if (evt.keyCode === 27) {
    bigPicture.classList.add('hidden');
  }
});
