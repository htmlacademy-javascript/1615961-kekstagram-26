import {showAlert} from './utilites.js';

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

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (!isValid) {
      evt.preventDefault();
    }
    else {
      const formData = new FormData(evt.target);

      fetch('https://26.javascript.pages.academy/kekstagram',
        {
          method: 'POST',
          body: formData,
        },
      )
        .then((response) => {
          if (response.ok) {
            onSuccess();
            showAlertSuccess('Данные успешно отправлены');
          } else {
            showAlert('Не удалось отправить форму. Попробуйте ещё раз');
          }
        })
        .catch(() => {
          showAlert('Не удалось отправить форму. Попробуйте ещё раз');
        });
    }
  });
};

export {setUserFormSubmit};
