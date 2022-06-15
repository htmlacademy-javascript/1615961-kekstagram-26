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

export {getRandomInteger};
