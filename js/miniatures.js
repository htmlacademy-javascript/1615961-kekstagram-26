import {createPhotos} from './data.js';

const containerPhotos = document.querySelector('.pictures');
const similarPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');
const similarPhotos = createPhotos();
const similarListFragment = document.createDocumentFragment();

similarPhotos.forEach((photo) => {
  const photoElement = similarPhotoTemplate.cloneNode(true);
  photoElement.querySelector('.picture__likes').textContent = photo.likes;
  photoElement.querySelector('.picture__img').src = photo.url;
  photoElement.querySelector('.picture__comments').textContent = photo.comments.length;
  similarListFragment.appendChild(photoElement);
});
containerPhotos.appendChild(similarListFragment);

