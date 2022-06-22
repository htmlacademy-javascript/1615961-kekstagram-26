import {createPhotos} from './data.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureClose = document.querySelector('.big-picture__cancel');
const bigPictureImg = bigPicture.querySelector('img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureDescription = bigPicture.querySelector('.social__caption');
const bigPictureComments = bigPicture.querySelector('.social__comments');
const bigPictureCommentsCount = bigPicture.querySelector('.comments-count');
const smallPicture = document.querySelectorAll('.picture');

// Нажатие на миниаютюру выводит большое изображение, комментарии и лайки

// for (let i = 0; i < smallPicture.length; i++) {
//   smallPicture[i].addEventListener('click', ()=> {
//     bigPicture.classList.remove('hidden');
//     bigPictureImg.src = createPhotos()[i].url;
//     bigPictureLikes.textContent = createPhotos()[i].likes;
//     bigPictureDescription.textContent = createPhotos()[i].description;
//     bigPicture.querySelector('.social__comment-count').classList.add('hidden');
//     bigPicture.querySelector('.comments-loader').classList.add('hidden');
//     document.querySelector('body').classList.add('modal-open');
//   });}

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
