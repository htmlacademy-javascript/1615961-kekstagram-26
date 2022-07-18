import {isEscapeKey, showAlert} from './utilites.js';
import {sendData} from './api.js';
import {onFormEscKeydown} from './user-form.js';

const RE = /^#[A-Za-zА-Яа-яЁё0-9]{1,100}$/;
const MAX_HASHTAG_LENGTH = 20;
const MAX_HASHTAG_QUANTITY = 5;

const formElement = document.querySelector('.img-upload__form');

const pristine = new Pristine(formElement, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__error-text',
});

// Валидация хэштегов

const hashtagsFieldElement = document.querySelector('.text__hashtags');

function validateHashtagValue (value) {
  const array = value.split(' ');
  for (const arrayElement of array) {
    if (!RE.test(arrayElement) && arrayElement !== '') {
      return false;
    }
  }
  return true;
}

function validateFirstSpace (value) {
  const array = value.split('');
  if (array[0] !== ' ' || array[0] === '') {
    return true;
  }
  return false;
}

function validateHashtagLength (value) {
  const array = value.split(' ');
  for (const arrayElement of array) {
    if (arrayElement.length > MAX_HASHTAG_LENGTH) {
      return false;
    }
  } return true;
}

function validateHashtagsQuantity (value) {
  const array = value.split(' ');
  return array.length <= MAX_HASHTAG_QUANTITY;
}

function validateNotSameHashtags (value) {
  const array = value.split(' ');
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        return false;
      }
    }
  } return true;
}

function validateNotSameInLowerCase (value) {
  const array = value.split(' ');
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i].toLowerCase() === array[j].toLowerCase()) {
        return false;
      }
    }
  } return true;
}

pristine.addValidator(hashtagsFieldElement, validateHashtagLength, 'Максимальная длина одного хэш-тега 20 символов, включая решётку');
pristine.addValidator(hashtagsFieldElement, validateHashtagsQuantity, 'Нельзя указать больше пяти хэш-тегов');
pristine.addValidator(hashtagsFieldElement, validateFirstSpace, 'Пробел перед первым хэштегом не допускается');
pristine.addValidator(hashtagsFieldElement, validateHashtagValue, 'Хэш-тег начинается с символа # (решётка), строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д., хеш-тег не может состоять только из одной решётки');
pristine.addValidator(hashtagsFieldElement, validateNotSameHashtags, 'Один и тот же хэш-тег не может быть использован дважды');
pristine.addValidator(hashtagsFieldElement, validateNotSameInLowerCase, 'Хэш-теги нечувствительны к регистру');

// Отправка формы

const submitButtonElement = document.querySelector('.img-upload__submit');

function blockSubmitButton () {
  submitButtonElement.disabled = true;
  submitButtonElement.textContent = 'Отправляю..';
}

function unblockSubmitButton () {
  submitButtonElement.disabled = false;
  submitButtonElement.textContent = 'Опубликовать';
}

formElement.addEventListener('input', () => {
  const isValid = pristine.validate();
  submitButtonElement.disabled = !isValid;
});

function setUserFormSubmit (onSuccess) {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unblockSubmitButton();
          openSuccessMessage();
        },
        () => {
          showAlert('Не удалось отправить форму. Попробуйте ещё раз');
          unblockSubmitButton();
          openErrorMessage();
        },
        new FormData(evt.target),
      );
    }
  });
}

// Блок с сообщениями об успехе отправки формы

const successTemplateElement = document.querySelector('#success').content.querySelector('.success');
const successCloseButtonElement = successTemplateElement.querySelector('.success__button');

function onSuccessMessageEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeSuccessMessage();
  }
}

function onSuccesMessageClickAround (evt) {
  if (evt.target === successTemplateElement) {
    closeSuccessMessage();
  }
}

function openSuccessMessage () {
  document.body.appendChild(successTemplateElement);
  document.addEventListener('keydown', onSuccessMessageEscKeydown);
  successCloseButtonElement.addEventListener('click', closeSuccessMessage);
  document.addEventListener('click', onSuccesMessageClickAround);
}

function closeSuccessMessage() {
  document.body.removeChild(successTemplateElement);
  document.removeEventListener('keydown', onSuccessMessageEscKeydown);
  document.removeEventListener('click', onSuccesMessageClickAround);
}

// Блок с сообщениями об ошибке отправки формы

const errorTemplateElement = document.querySelector('#error').content.querySelector('.error');
const errorCloseButtonElement = errorTemplateElement.querySelector('.error__button');

function onErrorMessageEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeErrorMessage();
  }
}

function onErrorMessageClickAround (evt) {
  if (evt.target === errorTemplateElement) {
    closeErrorMessage();
  }
}

function openErrorMessage () {
  document.body.appendChild(errorTemplateElement);
  document.addEventListener('keydown', onErrorMessageEscKeydown);
  errorCloseButtonElement.addEventListener('click', closeErrorMessage);
  errorTemplateElement.style.zIndex =  '100';
  document.addEventListener('click', onErrorMessageClickAround);
  document.removeEventListener('keydown', onFormEscKeydown);
}

function closeErrorMessage() {
  document.body.removeChild(errorTemplateElement);
  document.removeEventListener('keydown', onErrorMessageEscKeydown);
  document.removeEventListener('click', onErrorMessageClickAround);
  document.addEventListener('keydown', onFormEscKeydown);
}

export {setUserFormSubmit};
