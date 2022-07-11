import {onBigPictureEscKeydown} from './big-photo.js';

const containerPhotos = document.querySelector('.pictures');
const similarPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureDescription = bigPicture.querySelector('.social__caption');
const bigPictureCommentsList = bigPicture.querySelector('.social__comments');
const bigPictureCommentsCount = bigPicture.querySelector('.comments-count');

const commentElementTemplate = document.querySelector('#social__comment').content.querySelector('.social__comment');

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
      bigPictureCommentsList.innerHTML = '';
      console.log(comments);

      comments.forEach(({avatar, message}) => {
        const commentElement = commentElementTemplate.cloneNode(true);
        bigPictureCommentsList.appendChild(commentElement);
        commentElement.querySelector('.social__text').textContent = message;
        commentElement.querySelector('.social__picture').src = avatar;
      });
    });
  });
};

export {renderPhotos};
