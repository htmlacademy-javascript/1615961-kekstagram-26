import {isEscapeKey} from './utilites.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureClose = document.querySelector('.big-picture__cancel');

const bigPictureImg = bigPicture.querySelector('img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureDescription = bigPicture.querySelector('.social__caption');
const bigPictureCommentsList = bigPicture.querySelector('.social__comments');
const bigPictureCommentsCount = bigPicture.querySelector('.comments-count');
const bigPictureCommentsCounter = bigPicture.querySelector('.social__comment-count');
const bigPictureCommentsLoader = bigPicture.querySelector('.social__comments-loader');

const commentElementTemplate = document.querySelector('#social__comment').content.querySelector('.social__comment');
const MAX_SHOWN_COMMEN_AMOUNT = 5;

function showBigPicture (url, likes, comments, description) {
  document.addEventListener('keydown', onBigPictureEscKeydown);
  bigPicture.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  bigPictureImg.src = url;
  bigPictureLikes.textContent = likes;
  bigPictureDescription.textContent = description;
  bigPictureCommentsCount.textContent = comments.length;
  bigPictureCommentsList.innerHTML = '';

  if (comments.length <= MAX_SHOWN_COMMEN_AMOUNT) {
    comments.forEach(({avatar, message, name}) => {
      bigPictureCommentsLoader.classList.add('hidden');
      const commentElement = commentElementTemplate.cloneNode(true);
      bigPictureCommentsList.appendChild(commentElement);
      commentElement.querySelector('.social__text').textContent = message;
      commentElement.querySelector('.social__picture').src = avatar;
      commentElement.querySelector('.social__picture').alt = name;
      bigPictureCommentsCounter.textContent = `${comments.length} из ${comments.length} комментариев`;
    });
  }

  if (comments.length > MAX_SHOWN_COMMEN_AMOUNT) {
    comments.slice(0, MAX_SHOWN_COMMEN_AMOUNT).forEach(({avatar, message, name}) => {
      bigPictureCommentsLoader.classList.remove('hidden');
      const commentElement = commentElementTemplate.cloneNode(true);
      bigPictureCommentsList.appendChild(commentElement);
      commentElement.querySelector('.social__text').textContent = message;
      commentElement.querySelector('.social__picture').src = avatar;
      commentElement.querySelector('.social__picture').alt = name;
      bigPictureCommentsCounter.textContent = `${MAX_SHOWN_COMMEN_AMOUNT} из ${comments.length} комментариев`;
    });
  }

  let shownComments = MAX_SHOWN_COMMEN_AMOUNT;
  bigPictureCommentsLoader.addEventListener('click', () => {
    shownComments = shownComments + 5;
    comments.innerHTML = '';
    bigPictureCommentsCounter.textContent = `${shownComments} из ${comments.length} комментариев`;
    comments.slice(shownComments - MAX_SHOWN_COMMEN_AMOUNT, shownComments).forEach(({avatar, message, name}) => {
      bigPictureCommentsLoader.classList.remove('hidden');
      const commentElement = commentElementTemplate.cloneNode(true);
      bigPictureCommentsList.appendChild(commentElement);
      commentElement.querySelector('.social__text').textContent = message;
      commentElement.querySelector('.social__picture').src = avatar;
      commentElement.querySelector('.social__picture').alt = name;
    });
    if (shownComments >= comments.length) {
      bigPictureCommentsLoader.classList.add('hidden');
      bigPictureCommentsCounter.textContent = `${comments.length} из ${comments.length} комментариев`;
    }
  });
}

// Закрытие большого изображения на кнопку или клавишу ESC

function closeBigPicture () {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onBigPictureEscKeydown);
}

function onBigPictureEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
}

bigPictureClose.addEventListener('click', ()=> {
  closeBigPicture();
});

// Добавление комментария

const socialCommentsList = document.querySelector('.social__comments');
const socialFooterCommentField = document.querySelector('.social__footer-text');
const socialFooterSendButton = document.querySelector('.social__footer-btn');

socialFooterSendButton.addEventListener('click', () => {
  const commentElement = commentElementTemplate.cloneNode(true);
  const textMyComment = commentElement.querySelector('.social__text');
  const socialFooterAuthorAvatar = commentElement.querySelector('.social__picture');
  if (socialFooterCommentField.value !== '') {
    textMyComment.textContent = socialFooterCommentField.value;
    socialFooterCommentField.value = '';
    socialFooterAuthorAvatar.src = 'img/avatar-6.svg';
    socialCommentsList.appendChild(commentElement);
  }
});

export {onBigPictureEscKeydown, showBigPicture};
