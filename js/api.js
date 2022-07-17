import {showAlert} from './utilites.js';

const ServerAddresses = {
  ADDRESS_GET_SERVER: 'https://26.javascript.pages.academy/kekstagram/data',
  ADDRESS_POST_SERVER: 'https://26.javascript.pages.academy/kekstagram',
};

const getData = (onSuccess) => {
  fetch(ServerAddresses.ADDRESS_GET_SERVER)
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
    })
    .catch(() => {
      showAlert('Не удалось получить данные с сервера. Попробуйте ещё раз');
    });
};

const sendData = (onSuccess, onFail, body) => {

  fetch(ServerAddresses.ADDRESS_POST_SERVER,
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
