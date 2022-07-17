import {showBigPicture} from './big-photo.js';

const containerPhotosElement = document.querySelector('.pictures');
const similarPhotoTemplateElement = document.querySelector('#picture').content.querySelector('.picture');

function renderPhotos (photos) {
  photos.forEach(({url, likes, comments, description}) => {
    const photoElement = similarPhotoTemplateElement.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments.length;
    containerPhotosElement.append(photoElement);

    photoElement.addEventListener('click',() => {showBigPicture(url, likes, comments, description);
    });
  });
}

export {renderPhotos};
