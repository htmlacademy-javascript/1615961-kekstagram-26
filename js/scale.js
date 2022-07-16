const scaleButtonMinus = document.querySelector('.scale__control--smaller');
const scaleButtonPlus = document.querySelector('.scale__control--bigger');
const scaleField = document.querySelector('.scale__control--value');
const pictureElement = document.querySelector('.img-upload__preview-picture');

function scalePlus () {
  if (parseInt(scaleField.value, 10) <= 75) {
    scaleField.value = `${(parseInt(scaleField.value, 10) + 25)}%`;
    pictureElement.style.transform = `scale(${parseInt(scaleField.value, 10) / 100})`;
    return scaleField.value;
  }
}

function scaleMinus () {
  if (parseInt(scaleField.value, 10) >= 50) {
    scaleField.value = `${(parseInt(scaleField.value, 10) - 25)}%`;
    pictureElement.style.transform = `scale(${parseInt(scaleField.value, 10) / 100})`;
    return scaleField.value;
  }
}

function addDefaultScale () {
  scaleField.value = '100%';
  pictureElement.style.transform = 'scale(1)';
}

scaleButtonPlus.addEventListener ('click', scalePlus);
scaleButtonMinus.addEventListener ('click', scaleMinus);

export {addDefaultScale};
