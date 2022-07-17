const scaleMinusButtonElement = document.querySelector('.scale__control--smaller');
const scalePlusButtonElement = document.querySelector('.scale__control--bigger');
const scaleFieldElement = document.querySelector('.scale__control--value');
const pictureElement = document.querySelector('.img-upload__preview-picture');

function onScalePlusButtonclick () {
  if (parseInt(scaleFieldElement.value, 10) <= 75) {
    scaleFieldElement.value = `${(parseInt(scaleFieldElement.value, 10) + 25)}%`;
    pictureElement.style.transform = `scale(${parseInt(scaleFieldElement.value, 10) / 100})`;
    return scaleFieldElement.value;
  }
}

function onScaleMinusButtonclick () {
  if (parseInt(scaleFieldElement.value, 10) >= 50) {
    scaleFieldElement.value = `${(parseInt(scaleFieldElement.value, 10) - 25)}%`;
    pictureElement.style.transform = `scale(${parseInt(scaleFieldElement.value, 10) / 100})`;
    return scaleFieldElement.value;
  }
}

function addDefaultScale () {
  scaleFieldElement.value = '100%';
  pictureElement.style.transform = 'scale(1)';
}

scalePlusButtonElement.addEventListener ('click', onScalePlusButtonclick);
scaleMinusButtonElement.addEventListener ('click', onScaleMinusButtonclick);

export {addDefaultScale};
