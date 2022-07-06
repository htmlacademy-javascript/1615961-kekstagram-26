const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const noEffect = document.querySelector('#effect-none');
const chromeEffect = document.querySelector('#effect-chrome');
const sepiaEffect = document.querySelector('#effect-sepia');
const marvinEffect = document.querySelector('#effect-marvin');
const phobosEffect = document.querySelector('#effect-phobos');
const heatEffect = document.querySelector('#effect-heat');
const pictureElement = document.querySelector('.img-upload__preview-picture');

valueElement.value = 80;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 50,
  step: 1,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', (...rest) => {
  valueElement.value = sliderElement.noUiSlider.get();
});

sliderElement.classList.add('hidden');

// const valueElementValue = valueElement.value;

// function addChromeEffect () {
//   pictureElement.style.filter = `grayscale(${valueElementValue})`;
// }

const allEffects = {
  chrome:  (value) => `grayscale(${value})`,
  sepia: (value) => `sepia(${value})`,
  marvin: (value) => `invert(${value})`,
  phobos: (value) => `blur(${value})`,
  heat: (value) => `brightness(${value})`,
};

// chromeEffect.addEventListener('change', (evt) => {

// }

noEffect.addEventListener('change', (evt) => {
  pictureElement.classList.remove('effects__preview--sepia');
  pictureElement.classList.remove('effects__preview--chrome');
  pictureElement.classList.remove('effects__preview--marvin');
  pictureElement.classList.remove('effects__preview--phobos');
  pictureElement.classList.remove('effects__preview--heat');
  pictureElement.classList.add('effects__preview--none');
  if (evt.target.checked) {
    sliderElement.classList.add('hidden');
  }
});

chromeEffect.addEventListener('change', (evt) => {
  pictureElement.classList.remove('effects__preview--sepia');
  pictureElement.classList.remove('effects__preview--none');
  pictureElement.classList.remove('effects__preview--marvin');
  pictureElement.classList.remove('effects__preview--phobos');
  pictureElement.classList.remove('effects__preview--heat');
  pictureElement.classList.add('effects__preview--chrome');
  sliderElement.classList.remove('hidden');

  if (evt.target.checked) {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
      start: 1,
    });
  } else {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      step: 1,
    });
  }
});

sepiaEffect.addEventListener('change', (evt) => {
  pictureElement.classList.remove('effects__preview--chrome');
  pictureElement.classList.remove('effects__preview--none');
  pictureElement.classList.remove('effects__preview--marvin');
  pictureElement.classList.remove('effects__preview--phobos');
  pictureElement.classList.remove('effects__preview--heat');
  pictureElement.classList.add('effects__preview--sepia');
  sliderElement.classList.remove('hidden');

  if (evt.target.checked) {
    sliderElement.removeAttribute('disabled');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
      start: 1,
    });
  } else {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      step: 1,
    });
  }
});

marvinEffect.addEventListener('change', (evt) => {
  pictureElement.classList.remove('effects__preview--chrome');
  pictureElement.classList.remove('effects__preview--none');
  pictureElement.classList.remove('effects__preview--msepia');
  pictureElement.classList.remove('effects__preview--phobos');
  pictureElement.classList.remove('effects__preview--heat');
  pictureElement.classList.add('effects__preview--marvin');
  sliderElement.classList.remove('hidden');

  if (evt.target.checked) {
    sliderElement.removeAttribute('disabled');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      step: 1,
      start: 100,
    });
  } else {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      step: 1,
    });
  }
});

phobosEffect.addEventListener('change', (evt) => {
  pictureElement.classList.remove('effects__preview--chrome');
  pictureElement.classList.remove('effects__preview--none');
  pictureElement.classList.remove('effects__preview--marvin');
  pictureElement.classList.remove('effects__preview--sepia');
  pictureElement.classList.remove('effects__preview--heat');
  pictureElement.classList.add('effects__preview--phobos');
  sliderElement.classList.remove('hidden');

  if (evt.target.checked) {
    sliderElement.removeAttribute('disabled');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      step: 0.1,
      start: 3,
    });
  } else {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      step: 1,
    });
  }
});

heatEffect.addEventListener('change', (evt) => {
  pictureElement.classList.remove('effects__preview--chrome');
  pictureElement.classList.remove('effects__preview--none');
  pictureElement.classList.remove('effects__preview--marvin');
  pictureElement.classList.remove('effects__preview--phobos');
  pictureElement.classList.remove('effects__preview--sepia');
  pictureElement.classList.add('effects__preview--heat');
  sliderElement.classList.remove('hidden');

  if (evt.target.checked) {
    sliderElement.removeAttribute('disabled');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3,
      },
      step: 0.1,
      start: 3,
    });
  } else {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      step: 1,
    });
  }
});
