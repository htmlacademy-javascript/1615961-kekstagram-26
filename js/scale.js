const scaleButtonMinus = document.querySelector('.scale__control--smaller');
const scaleButtonPlus = document.querySelector('.scale__control--bigger');
const scaleField = document.querySelector('.scale__control--value');
const pictureElement = document.querySelector('.img-upload__preview-picture');

let scaleFieldValue = 100;
scaleField.value = `${scaleFieldValue }%`;

function scalePlus () {
  if (scaleFieldValue <= 75) {
    scaleFieldValue = Number(scaleFieldValue) + 25;
    scaleField.value = `${scaleFieldValue }%`;

    if (scaleFieldValue === 25) {
      pictureElement.classList.remove('img-upload__preview-picture--scale50');
      pictureElement.classList.remove('img-upload__preview-picture--scale75');
      pictureElement.classList.remove('img-upload__preview-picture--scale100');
      pictureElement.classList.add('img-upload__preview-picture--scale25');
    }

    if (scaleFieldValue === 50) {
      pictureElement.classList.remove('img-upload__preview-picture--scale25');
      pictureElement.classList.remove('img-upload__preview-picture--scale75');
      pictureElement.classList.remove('img-upload__preview-picture--scale100');
      pictureElement.classList.add('img-upload__preview-picture--scale50');
    }

    if (scaleFieldValue === 75) {
      pictureElement.classList.remove('img-upload__preview-picture--scale25');
      pictureElement.classList.remove('img-upload__preview-picture--scale50');
      pictureElement.classList.remove('img-upload__preview-picture--scale100');
      pictureElement.classList.add('img-upload__preview-picture--scale75');
    }

    if (scaleFieldValue === 100) {
      pictureElement.classList.remove('img-upload__preview-picture--scale25');
      pictureElement.classList.remove('img-upload__preview-picture--scale50');
      pictureElement.classList.remove('img-upload__preview-picture--scale75');
      pictureElement.classList.add('img-upload__preview-picture--scale100');
    }

    return `${scaleFieldValue  }%`;
  }
}

function scaleMinus () {
  if (scaleFieldValue >= 50) {
    scaleFieldValue = scaleFieldValue - 25;
    scaleField.value = `${scaleFieldValue }%`;

    if (scaleFieldValue === 25) {
      pictureElement.classList.remove('img-upload__preview-picture--scale50');
      pictureElement.classList.remove('img-upload__preview-picture--scale75');
      pictureElement.classList.remove('img-upload__preview-picture--scale100');
      pictureElement.classList.add('img-upload__preview-picture--scale25');
    }

    if (scaleFieldValue === 50) {
      pictureElement.classList.remove('img-upload__preview-picture--scale25');
      pictureElement.classList.remove('img-upload__preview-picture--scale75');
      pictureElement.classList.remove('img-upload__preview-picture--scale100');
      pictureElement.classList.add('img-upload__preview-picture--scale50');
    }

    if (scaleFieldValue === 75) {
      pictureElement.classList.remove('img-upload__preview-picture--scale25');
      pictureElement.classList.remove('img-upload__preview-picture--scale50');
      pictureElement.classList.remove('img-upload__preview-picture--scale100');
      pictureElement.classList.add('img-upload__preview-picture--scale75');
    }

    if (scaleFieldValue === 100) {
      pictureElement.classList.remove('img-upload__preview-picture--scale25');
      pictureElement.classList.remove('img-upload__preview-picture--scale50');
      pictureElement.classList.remove('img-upload__preview-picture--scale75');
      pictureElement.classList.add('img-upload__preview-picture--scale100');
    }

    return `${scaleFieldValue  }%`;
  }
}

scaleButtonPlus.addEventListener ('click', scalePlus);
scaleButtonMinus.addEventListener ('click', scaleMinus);
