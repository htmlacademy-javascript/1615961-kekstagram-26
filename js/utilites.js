// Функция, возвращающая случайное целое число из переданного диапазона включительно.

function getRandomInteger(min, max) {
  if (min > max) {
    [min, max] = [max, min];
  }
  if (min < 0 || max < 0) {
    throw new RangeError('Параметры должны быть больше нуля');
  }
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}

// Функция для проверки максимальной длины строки.

function isCommentLengthOk(comment, maxCommentLength = 140) {
  return comment.length <= maxCommentLength;
}

isCommentLengthOk(123, );

// Функция для проверки нажатия Esc.

function isEscapeKey (evt) {
  return evt.key === 'Escape';
}

// Функция ошибки, если фетч не смог выполниться

const ALERT_SHOW_TIME = 5000;

const showAlert = function (message) {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {getRandomInteger, isEscapeKey, showAlert};
