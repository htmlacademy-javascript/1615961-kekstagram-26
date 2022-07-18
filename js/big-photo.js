import {isEscapeKey} from './utilites.js';

const MAX_SHOWN_COMMEN_AMOUNT = 5;

const bigPictureElement = document.querySelector('.big-picture');
const bigPictureCloseButtonElement = document.querySelector('.big-picture__cancel');
const bigPictureImgElement = bigPictureElement.querySelector('img');
const bigPictureLikesElement = bigPictureElement.querySelector('.likes-count');
const bigPictureDescriptionElement = bigPictureElement.querySelector('.social__caption');
const bigPictureCommentsListElement = bigPictureElement.querySelector('.social__comments');
const bigPictureCommentsCountElement = bigPictureElement.querySelector('.comments-count');
const bigPictureCommentsCounterElement = bigPictureElement.querySelector('.social__comment-count');
const bigPictureCommentsLoaderElement = bigPictureElement.querySelector('.social__comments-loader');
const commentTemplateElement = document.querySelector('#social__comment').content.querySelector('.social__comment');

function showBigPicture (url, likes, comments, description) {
  document.addEventListener('keydown', onBigPictureEscKeydown);
  bigPictureElement.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  bigPictureImgElement.src = url;
  bigPictureLikesElement.textContent = likes;
  bigPictureDescriptionElement.textContent = description;
  bigPictureCommentsCountElement.textContent = comments.length;
  bigPictureCommentsListElement.innerHTML = '';

  if (comments.length <= MAX_SHOWN_COMMEN_AMOUNT) {
    comments.forEach(({avatar, message, name}) => {
      bigPictureCommentsLoaderElement.classList.add('hidden');
      renderComment({avatar, message, name});
      bigPictureCommentsCounterElement.textContent = `${comments.length} из ${comments.length} комментариев`;
    });
  }

  if (comments.length > MAX_SHOWN_COMMEN_AMOUNT) {
    comments.slice(0, MAX_SHOWN_COMMEN_AMOUNT).forEach(({avatar, message, name}) => {
      bigPictureCommentsLoaderElement.classList.remove('hidden');
      renderComment({avatar, message, name});
      bigPictureCommentsCounterElement.textContent = `${MAX_SHOWN_COMMEN_AMOUNT} из ${comments.length} комментариев`;
    });
  }

  let shownComments = MAX_SHOWN_COMMEN_AMOUNT;
  bigPictureCommentsLoaderElement.addEventListener('click', () => {
    shownComments = shownComments + 5;
    comments.innerHTML = '';
    bigPictureCommentsCounterElement.textContent = `${shownComments} из ${comments.length} комментариев`;
    comments.slice(shownComments - MAX_SHOWN_COMMEN_AMOUNT, shownComments).forEach(({avatar, message, name}) => {
      bigPictureCommentsLoaderElement.classList.remove('hidden');
      renderComment({avatar, message, name});
    });
    if (shownComments >= comments.length) {
      bigPictureCommentsLoaderElement.classList.add('hidden');
      bigPictureCommentsCounterElement.textContent = `${comments.length} из ${comments.length} комментариев`;
    }
  });
}

function renderComment ({avatar, message, name}) {
  const commentElement = commentTemplateElement.cloneNode(true);
  bigPictureCommentsListElement.appendChild(commentElement);
  commentElement.querySelector('.social__text').textContent = message;
  commentElement.querySelector('.social__picture').src = avatar;
  commentElement.querySelector('.social__picture').alt = name;
}

// Закрытие большого изображения на кнопку или клавишу ESC

function closeBigPicture () {
  bigPictureElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onBigPictureEscKeydown);
}

function onBigPictureEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
}

bigPictureCloseButtonElement.addEventListener('click', ()=> {
  closeBigPicture();
});

// Добавление комментария

const socialCommentsListElement = document.querySelector('.social__comments');
const socialFooterCommentFieldElement = document.querySelector('.social__footer-text');
const socialFooterSendButtonElement = document.querySelector('.social__footer-btn');

socialFooterSendButtonElement.addEventListener('click', () => {
  const commentElement = commentTemplateElement.cloneNode(true);
  const MyCommentTextElement = commentElement.querySelector('.social__text');
  const socialFooterAuthorAvatar = commentElement.querySelector('.social__picture');
  if (socialFooterCommentFieldElement.value !== '') {
    MyCommentTextElement.textContent = socialFooterCommentFieldElement.value;
    socialFooterCommentFieldElement.value = '';
    socialFooterAuthorAvatar.src = 'img/avatar-6.svg';
    socialCommentsListElement.appendChild(commentElement);
  }
});

export {onBigPictureEscKeydown, showBigPicture};
