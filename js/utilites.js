// Функция ошибки, если фетч не смог выполниться

const ALERT_SHOW_TIME = 5000;
const ERROR_MESSAGE_Z_INDEX = '100';
const ERROR_MESSAGE_PADDING = '10px 3px';
const ERROR_MESSAGE_POSITION = 'absolute';
const ERROR_MESSAGE_FONT_SIZE = '30px';
const ERROR_MESSAGE_BACKGROUND_COLOR = '#ff0000';
const ERROR_MESSAGE_TEXT_ALIGN = 'center';
const ERROR_MESSAGE_LEFT_DISTANCE = '0';
const ERROR_MESSAGE_TOP_DISTANCE = '0';
const ERROR_MESSAGE_RIGHT_DISTANCE = '0';


const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = ERROR_MESSAGE_Z_INDEX;
  alertContainer.style.position = ERROR_MESSAGE_POSITION;
  alertContainer.style.left = ERROR_MESSAGE_LEFT_DISTANCE;
  alertContainer.style.top = ERROR_MESSAGE_TOP_DISTANCE;
  alertContainer.style.right = ERROR_MESSAGE_RIGHT_DISTANCE;
  alertContainer.style.padding = ERROR_MESSAGE_PADDING;
  alertContainer.style.fontSize = ERROR_MESSAGE_FONT_SIZE;
  alertContainer.style.textAlign = ERROR_MESSAGE_TEXT_ALIGN;
  alertContainer.style.backgroundColor = ERROR_MESSAGE_BACKGROUND_COLOR;

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

// Функция для проверки нажатия Esc.

const isEscapeKey = (evt) => evt.key === 'Escape';

// Функция debounce для устранения дребезга.

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

// Функция тасовки массива

const shuffle = (photos) => {
  for (let i = photos.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [photos[i], photos[j]] = [photos[j], photos[i]];
  }
  return photos;
};

export {isEscapeKey, showAlert, debounce, shuffle};
