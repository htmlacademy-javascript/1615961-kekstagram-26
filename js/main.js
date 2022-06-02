// Функция, возвращающая случайное целое число из переданного диапазона включительно.

function getRandomInteger(min, max) {
  if (min >= max) {
    return('Некорректный диапазон min и max');
  }
  if (min < 0) {
    return('Минимальное значение должно быть больше или равно нулю');
  }
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}

getRandomInteger(1, 2);

// Функция для проверки максимальной длины строки.

function isCommentLengthOk(commentLength, maxCommentLength) {
  const comment = 'test';
  commentLength = comment.length;
  if (commentLength <= maxCommentLength) {
    return true;
  } else {
    return false;
  }
}

isCommentLengthOk();
