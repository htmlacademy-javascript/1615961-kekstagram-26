import {isEscapeKey, showAlert} from './utilites.js';
import {sendData} from './api.js';
import {onFormEscKeydown} from './user-form.js';

const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'error-text',
});

// Валидация хэштегов

const hashtagsField = document.querySelector('.text__hashtags');
const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const validateHashtagValue = function (value) {
  const array = value.split(' ');
  for (const arrayElement of array) {
    if (re.test(arrayElement) || arrayElement === '') {
      return true;
    }
  } return false;
};

const validateHashtagLength = function (value) {
  const maxHastagLength = 20;
  const array = value.split(' ');
  for (const arrayElement of array) {
    if (arrayElement.length <= maxHastagLength) {
      return true;
    }
  } return false;
};

const validateHashtagsQuantity = function (value) {
  const array = value.split(' ');
  const maxHastagsQuantity = 5;
  return array.length <= maxHastagsQuantity;
};

const validateNotSameHashtags = function (value) {
  const array = value.split(' ');
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        return false;
      }
    }
  } return true;
};

const validateNotSameInLowerCase = function (value) {
  const array = value.split(' ');
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i].toLowerCase() === array[j].toLowerCase()) {
        return false;
      }
    }
  } return true;
};

pristine.addValidator(hashtagsField, validateHashtagLength, 'максимальная длина одного хэш-тега 20 символов, включая решётку');
pristine.addValidator(hashtagsField, validateHashtagsQuantity, 'нельзя указать больше пяти хэш-тегов');
pristine.addValidator(hashtagsField, validateHashtagValue, 'хэш-тег начинается с символа # (решётка), строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д., хеш-тег не может состоять только из одной решётки', false);
pristine.addValidator(hashtagsField, validateNotSameHashtags, 'один и тот же хэш-тег не может быть использован дважды');
pristine.addValidator(hashtagsField, validateNotSameInLowerCase, 'хэш-теги нечувствительны к регистру: #ХэшТег и #хэштег считаются одним и тем же тегом');

// Отправка формы

const submitButton = document.querySelector('.img-upload__submit');

const blockSubmitButton = function () {
  submitButton.disabled = true;
  submitButton.textContent = 'Отправляю..';
};

const unblockSubmitButton = function () {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

form.addEventListener('input', () => {
  const isValid = pristine.validate();
  if (!isValid) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
});

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
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
};

// Блок с сообщениями об успехе отправки формы

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successCloseButton = successTemplate.querySelector('.success__button');

function onSuccessEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeSuccessMessage();
  }
}

function onSuccesMessageClickAround (evt) {
  if (evt.target === successTemplate) {
    closeSuccessMessage();
  }
}

function openSuccessMessage () {
  document.body.appendChild(successTemplate);
  document.addEventListener('keydown', onSuccessEscKeydown);
  successCloseButton.addEventListener('click', closeSuccessMessage);
  document.addEventListener('click', onSuccesMessageClickAround);
}

function closeSuccessMessage() {
  document.body.removeChild(successTemplate);
  document.removeEventListener('keydown', onSuccessEscKeydown);
  document.removeEventListener('click', onSuccesMessageClickAround);
}

// Блок с сообщениями об ошибке отправки формы

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorCloseButton = errorTemplate.querySelector('.error__button');

function onErrorMessageEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeErrorMessage();
  }
}

function onErrorMessageClickAround (evt) {
  if (evt.target === errorTemplate) {
    closeErrorMessage();
  }
}

function openErrorMessage () {
  document.body.appendChild(errorTemplate);
  document.addEventListener('keydown', onErrorMessageEscKeydown);
  errorCloseButton.addEventListener('click', closeErrorMessage);
  errorTemplate.style.zIndex =  '100';
  document.addEventListener('click', onErrorMessageClickAround);
  document.removeEventListener('keydown', onFormEscKeydown);
}

function closeErrorMessage() {
  document.body.removeChild(errorTemplate);
  document.removeEventListener('keydown', onErrorMessageEscKeydown);
  document.removeEventListener('click', onErrorMessageClickAround);
  document.addEventListener('keydown', onFormEscKeydown);
}

export {setUserFormSubmit};
