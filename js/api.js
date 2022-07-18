import {showAlert} from './utilites.js';

const ERROR_DOWNLOAD_MESSAGE = 'Не удалось получить данные с сервера. Попробуйте ещё раз';
const ERROR_UPLOAD_MESSAGE = 'Не удалось отправить форму. Попробуйте ещё раз';

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
      showAlert(ERROR_DOWNLOAD_MESSAGE);
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
        onFail(ERROR_UPLOAD_MESSAGE);
      }
    })
    .catch(() => {
      onFail(ERROR_UPLOAD_MESSAGE);
    });
};

export {getData, sendData};
