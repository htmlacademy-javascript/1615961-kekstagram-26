import {getRandomInteger} from '../js/utilites.js';

// Создание массива объектов с описанием фотографии

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

const commentAvatarArray = [1, 2, 3, 4, 5, 6];

// Функция создания комментария, затем создания массива из комментариев

const createComment = function (index) {

  const comment = {
    id: index + 1,
    avatar: `img/avatar-${  commentAvatarArray[getRandomInteger(0, commentAvatarArray.length - 1)]  }.svg`,
    message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
    name: NAMES[getRandomInteger(0, NAMES.length - 1)],
  };
  return comment;
};

const COMMENTS_AMOUNT = 25;
const similarComments = Array.from({length: COMMENTS_AMOUNT},  (_, index) => createComment(index));

// Функция создания полного описания фотографии - затем массива - с характеристиками автора и комментария

const createPhotoDescription = function (index) {
  const minLikes = 15;
  const maxLikes = 200;
  return {
    id: index + 1,
    url: `photos/${  index + 1 }.jpg`,
    description: PHOTO_DESCRIPTION[getRandomInteger(0, PHOTO_DESCRIPTION.length - 1)],
    likes: getRandomInteger(minLikes, maxLikes),
    comments: similarComments[index],
  };
};

// Функция вывода массива объектов

const createPhotos = function () {
  const PHOTOS_AMOUNT = 25;
  return Array.from({length: PHOTOS_AMOUNT}, (_, index) => createPhotoDescription(index));
};

export {createPhotos};
