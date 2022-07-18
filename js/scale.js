const STEP_SCALE_ON_CLICK = 25;
const MIN_CHANGED_SCALE = 25;
const MAX_CHANGED_SCALE = 100;

const scaleMinusButtonElement = document.querySelector('.scale__control--smaller');
const scalePlusButtonElement = document.querySelector('.scale__control--bigger');
const scaleFieldElement = document.querySelector('.scale__control--value');
const pictureElement = document.querySelector('.img-upload__preview-picture');

function onScalePlusButtonclick () {
  if (parseInt(scaleFieldElement.value, 10) < MAX_CHANGED_SCALE) {
    scaleFieldElement.value = `${(parseInt(scaleFieldElement.value, 10) + STEP_SCALE_ON_CLICK)}%`;
    pictureElement.style.transform = `scale(${parseInt(scaleFieldElement.value, 10) / 100})`;
    return scaleFieldElement.value;
  }
}

function onScaleMinusButtonclick () {
  if (parseInt(scaleFieldElement.value, 10) > MIN_CHANGED_SCALE) {
    scaleFieldElement.value = `${(parseInt(scaleFieldElement.value, 10) - STEP_SCALE_ON_CLICK)}%`;
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
