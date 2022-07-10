import {onBigPictureEscKeydown} from './big-photo.js';

const containerPhotos = document.querySelector('.pictures');
const similarPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureDescription = bigPicture.querySelector('.social__caption');
const bigPictureComments = bigPicture.querySelector('.social__comments');
const bigPictureCommentsCount = bigPicture.querySelector('.comments-count');

const renderPhotos = (photos) => {
  photos.forEach(({url, likes, comments, description}) => {
    const photoElement = similarPhotoTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments.length;
    containerPhotos.appendChild(photoElement);
    photoElement.addEventListener('click', () => {
      document.addEventListener('keydown', onBigPictureEscKeydown);
      bigPicture.classList.remove('hidden');
      document.querySelector('body').classList.add('modal-open');
      bigPictureImg.src = url;
      bigPictureLikes.textContent = likes;
      bigPictureDescription.textContent = description;
      bigPictureCommentsCount.textContent = comments.length;
      bigPictureComments.querySelectorAll('.social__text')[0].textContent = comments[0].message;
      bigPictureComments.querySelectorAll('.social__text')[1].textContent = comments[1].message;
      // bigPictureComments.querySelector('.social__picture').src = comments[0].avatar;
    });
  });
};

export {renderPhotos};
