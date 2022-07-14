import {showBigPicture} from './big-photo.js';

const containerPhotos = document.querySelector('.pictures');
const similarPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');

function renderPhotos (photos) {
  photos.forEach(({url, likes, comments, description}) => {
    const photoElement = similarPhotoTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments.length;
    containerPhotos.append(photoElement);

    photoElement.addEventListener('click',() => {showBigPicture(url, likes, comments, description);
    });
  });
}

export {renderPhotos};
