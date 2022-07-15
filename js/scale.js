const scaleButtonMinus = document.querySelector('.scale__control--smaller');
const scaleButtonPlus = document.querySelector('.scale__control--bigger');
const scaleField = document.querySelector('.scale__control--value');
const pictureElement = document.querySelector('.img-upload__preview-picture');

function scalePlus () {
  if (parseInt(scaleField.value, 10) <= 75) {
    scaleField.value = `${(parseInt(scaleField.value, 10) + 25)}%`;

    if (scaleField.value === '25%') {
      pictureElement.classList.remove('img-upload__preview-picture--scale50');
      pictureElement.classList.remove('img-upload__preview-picture--scale75');
      pictureElement.classList.remove('img-upload__preview-picture--scale100');
      pictureElement.classList.add('img-upload__preview-picture--scale25');
    }

    if (scaleField.value === '50%') {
      pictureElement.classList.remove('img-upload__preview-picture--scale25');
      pictureElement.classList.remove('img-upload__preview-picture--scale75');
      pictureElement.classList.remove('img-upload__preview-picture--scale100');
      pictureElement.classList.add('img-upload__preview-picture--scale50');
    }

    if (scaleField.value === '75%') {
      pictureElement.classList.remove('img-upload__preview-picture--scale25');
      pictureElement.classList.remove('img-upload__preview-picture--scale50');
      pictureElement.classList.remove('img-upload__preview-picture--scale100');
      pictureElement.classList.add('img-upload__preview-picture--scale75');
    }

    if (scaleField.value === '100%') {
      pictureElement.classList.remove('img-upload__preview-picture--scale25');
      pictureElement.classList.remove('img-upload__preview-picture--scale50');
      pictureElement.classList.remove('img-upload__preview-picture--scale75');
      pictureElement.classList.add('img-upload__preview-picture--scale100');
    }

    return scaleField.value;
  }
}

function scaleMinus () {
  if (parseInt(scaleField.value, 10) >= 50) {
    scaleField.value = `${(parseInt(scaleField.value, 10) - 25)}%`;

    if (scaleField.value === '25%') {
      pictureElement.classList.remove('img-upload__preview-picture--scale50');
      pictureElement.classList.remove('img-upload__preview-picture--scale75');
      pictureElement.classList.remove('img-upload__preview-picture--scale100');
      pictureElement.classList.add('img-upload__preview-picture--scale25');
    }

    if (scaleField.value === '50%') {
      pictureElement.classList.remove('img-upload__preview-picture--scale25');
      pictureElement.classList.remove('img-upload__preview-picture--scale75');
      pictureElement.classList.remove('img-upload__preview-picture--scale100');
      pictureElement.classList.add('img-upload__preview-picture--scale50');
    }

    if (scaleField.value === '75%') {
      pictureElement.classList.remove('img-upload__preview-picture--scale25');
      pictureElement.classList.remove('img-upload__preview-picture--scale50');
      pictureElement.classList.remove('img-upload__preview-picture--scale100');
      pictureElement.classList.add('img-upload__preview-picture--scale75');
    }

    if (scaleField.value === '100%') {
      pictureElement.classList.remove('img-upload__preview-picture--scale25');
      pictureElement.classList.remove('img-upload__preview-picture--scale50');
      pictureElement.classList.remove('img-upload__preview-picture--scale75');
      pictureElement.classList.add('img-upload__preview-picture--scale100');
    }

    return scaleField.value;
  }
}

function addDefaultScale () {
  pictureElement.classList.remove('img-upload__preview-picture--scale25');
  pictureElement.classList.remove('img-upload__preview-picture--scale50');
  pictureElement.classList.remove('img-upload__preview-picture--scale75');
  pictureElement.classList.add('img-upload__preview-picture--scale100');
  scaleField.value = '100%';
}

scaleButtonPlus.addEventListener ('click', scalePlus);
scaleButtonMinus.addEventListener ('click', scaleMinus);

export {addDefaultScale};
