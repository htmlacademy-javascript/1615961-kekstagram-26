// Функция, возвращающая случайное целое число из переданного диапазона включительно.

function getRandomInteger(min, max) {
  if (min > max) {
    const swap = min;
    min = max;
    max = swap;
  }
  if (min < 0 || max < 0) {
    new RangeError('Параметры должны быть больше нуля');
  }
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}

getRandomInteger(1, 2);

// Функция для проверки максимальной длины строки.

function isCommentLengthOk(comment, maxCommentLength) {
  maxCommentLength = 140;
  return (comment.length <= maxCommentLength);
}

isCommentLengthOk();
