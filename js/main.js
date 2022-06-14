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

// isCommentLengthOk();

// Создание массива объектов с описанием фотографии

const numberOfId = 26;
const numberOfUrlId = 26;

const ID = [];
for (let i = 0; i < numberOfId; i++) {
  ID[i] = i + 1;
}

const URL_ID = [];
for (let i = 0; i < numberOfUrlId; i++) {
  URL_ID[i] = i + 1;
}

const PHOTO_DESCRIPTION = [
  'Море',
  'Сектор приз на барабане',
  'Да пребудет с тобой Сила',
  'Самый толстый на ворота!',
  'It will be legen wait-for-it wait-for-it dary',
  'На абордаж!',
  'Смотри что могу',
  'Это я в Питере был, сейчас дома уже',
];

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const commentAvatarArray = [
  1,
  2,
  3,
  4,
  5,
  6,
];

const numberOfCommentId = 500;

const COMMENT_ID = [];
for (let i = 0; i < numberOfCommentId; i++) {
  COMMENT_ID[i] = i + 1;
}

// Функция создания комментария, затем создания массива из комментариев

const createComment = function () {
  COMMENT_ID.splice(0, 1);
  const randomAvatarIndex = getRandomInteger(0, commentAvatarArray.length - 1);
  const randomMessageIndex = getRandomInteger(0, MESSAGES.length - 1);
  const randomNameIndex = getRandomInteger(0, NAMES.length - 1);

  const comment = {
    id: COMMENT_ID[0] - 1,
    avatar: `img/avatar-${  commentAvatarArray[randomAvatarIndex]  }.svg`,
    message: MESSAGES[randomMessageIndex],
    name: NAMES[randomNameIndex],
  };

  return comment;
};

const COMMENTS_AMOUNT = 20;
const similarComments = Array.from({length: COMMENTS_AMOUNT}, createComment);

// Функция создания полного описания фотографии

const createPhotoDescription = function () {

  const randomPhotoDescriptionIndex = getRandomInteger(0, PHOTO_DESCRIPTION.length - 1);
  ID.splice(0, 1);
  URL_ID.splice(0, 1);
  similarComments.splice(0, 1);

  return {
    id: ID[0] - 1,
    url: `photos/${  URL_ID[0] - 1 }.jpg`,
    description: PHOTO_DESCRIPTION[randomPhotoDescriptionIndex],
    likes: getRandomInteger(15, 200),
    comments: similarComments[0],
  };
};

const OFFERS_AMOUNT = 25;
const similarPhotos = Array.from({length: OFFERS_AMOUNT}, createPhotoDescription);
console.log(similarPhotos);
