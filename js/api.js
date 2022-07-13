import {showAlert} from './utilites.js';

const addressGetServer = 'https://26.javascript.pages.academy/kekstagram/data';
const addressPostServer = 'https://26.javascript.pages.academy/kekstagram';

const getData = (onSuccess) => {
  fetch(addressGetServer)
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);

      // Фильтры писать сюда
    })
    .catch(() => {
      showAlert('Не удалось получить данные с сервера. Попробуйте ещё раз');
    });
};

const sendData = (onSuccess, onFail, body) => {

  fetch(addressPostServer,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export {getData, sendData};
