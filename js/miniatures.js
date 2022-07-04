import {createPhotos} from './data.js';

const containerPhotos = document.querySelector('.pictures');
const similarPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');
const similarPhotos = createPhotos();

similarPhotos.forEach((photo) => {
  const photoElement = similarPhotoTemplate.cloneNode(true);
  photoElement.querySelector('.picture__likes').textContent = photo.likes;
  photoElement.querySelector('.picture__img').src = photo.url;
  photoElement.querySelector('.picture__comments').textContent = photo.comments.length;
  containerPhotos.appendChild(photoElement);
});

// Блок с большими фотографми из миниаютюр

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureDescription = bigPicture.querySelector('.social__caption');
const bigPictureComments = bigPicture.querySelector('.social__comments');
const bigPictureCommentsCount = bigPicture.querySelector('.comments-count');
const smallPicture = document.querySelectorAll('.picture');

// Нажатие на миниаютюру выводит большое изображение, комментарии и лайки

for (let i = 0; i < smallPicture.length; i++) {
  smallPicture[i].addEventListener('click', ()=> {
    bigPicture.classList.remove('hidden');
    bigPictureImg.src = similarPhotos[i].url;
    bigPictureLikes.textContent = similarPhotos[i].likes;
    bigPictureDescription.textContent = similarPhotos[i].description;
    bigPictureCommentsCount.textContent = similarPhotos[i].comments.length;
    bigPictureComments.querySelector('.social__text').textContent = similarPhotos[i].comments[0].message;
    bigPictureComments.querySelector('.social__picture').src = similarPhotos[i].comments[0].avatar;
    bigPicture.querySelector('.social__comment-count').classList.add('hidden');
    bigPicture.querySelector('.comments-loader').classList.add('hidden');
    document.querySelector('body').classList.add('modal-open');
  });}
