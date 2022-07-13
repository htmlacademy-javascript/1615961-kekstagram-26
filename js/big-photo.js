import {isEscapeKey} from './utilites.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureClose = document.querySelector('.big-picture__cancel');

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
  const commentElementTemplate = document.querySelector('#social__comment').content.querySelector('.social__comment');
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

export {onBigPictureEscKeydown};
