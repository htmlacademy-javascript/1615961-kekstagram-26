const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const pictureElement = document.querySelector('.img-upload__preview-picture');

const noEffect = document.querySelector('#effect-none');
const chromeEffect = document.querySelector('#effect-chrome');
const sepiaEffect = document.querySelector('#effect-sepia');
const marvinEffect = document.querySelector('#effect-marvin');
const phobosEffect = document.querySelector('#effect-phobos');
const heatEffect = document.querySelector('#effect-heat');

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

function addNoEffect () {
  pictureElement.classList.remove('effects__preview--sepia');
  pictureElement.classList.remove('effects__preview--chrome');
  pictureElement.classList.remove('effects__preview--marvin');
  pictureElement.classList.remove('effects__preview--phobos');
  pictureElement.classList.remove('effects__preview--heat');
  pictureElement.classList.add('effects__preview--none');
  sliderElement.classList.add('hidden');

  pictureElement.style.filter = '';
}

function addChromeEffect () {
  pictureElement.classList.remove('effects__preview--sepia');
  pictureElement.classList.remove('effects__preview--none');
  pictureElement.classList.remove('effects__preview--marvin');
  pictureElement.classList.remove('effects__preview--phobos');
  pictureElement.classList.remove('effects__preview--heat');
  pictureElement.classList.add('effects__preview--chrome');
  sliderElement.classList.remove('hidden');

  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    start: 1,
  });

  sliderElement.noUiSlider.on('update', () => {
    valueElement.value = sliderElement.noUiSlider.get();
    const valueElementValue = valueElement.value;
    pictureElement.style.filter = `grayscale(${valueElementValue})`;
  });
}

function addSepiaEffect() {
  pictureElement.classList.remove('effects__preview--chrome');
  pictureElement.classList.remove('effects__preview--none');
  pictureElement.classList.remove('effects__preview--marvin');
  pictureElement.classList.remove('effects__preview--phobos');
  pictureElement.classList.remove('effects__preview--heat');
  pictureElement.classList.add('effects__preview--sepia');
  sliderElement.classList.remove('hidden');

  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    start: 1,
  });

  sliderElement.noUiSlider.on('update', () => {
    valueElement.value = sliderElement.noUiSlider.get();
    const valueElementValue = valueElement.value;
    pictureElement.style.filter = `sepia(${valueElementValue})`;
  });
}

function addMarvinEffect() {
  pictureElement.classList.remove('effects__preview--chrome');
  pictureElement.classList.remove('effects__preview--none');
  pictureElement.classList.remove('effects__preview--sepia');
  pictureElement.classList.remove('effects__preview--phobos');
  pictureElement.classList.remove('effects__preview--heat');
  pictureElement.classList.add('effects__preview--marvin');
  sliderElement.classList.remove('hidden');

  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 100,
    },
    step: 1,
    start: 100,
  });

  sliderElement.noUiSlider.on('update', () => {
    valueElement.value = sliderElement.noUiSlider.get();
    const valueElementValue = valueElement.value;
    pictureElement.style.filter = `invert(${valueElementValue}%)`;
  });
}

function addPhobosEffect() {
  pictureElement.classList.remove('effects__preview--chrome');
  pictureElement.classList.remove('effects__preview--none');
  pictureElement.classList.remove('effects__preview--marvin');
  pictureElement.classList.remove('effects__preview--sepia');
  pictureElement.classList.remove('effects__preview--heat');
  pictureElement.classList.add('effects__preview--phobos');
  sliderElement.classList.remove('hidden');

  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 3,
    },
    step: 0.1,
    start: 3,
  });

  sliderElement.noUiSlider.on('update', () => {
    valueElement.value = sliderElement.noUiSlider.get();
    const valueElementValue = valueElement.value;
    pictureElement.style.filter = `blur(${valueElementValue}px)`;
  });
}

function addHeatEffect() {
  pictureElement.classList.remove('effects__preview--chrome');
  pictureElement.classList.remove('effects__preview--none');
  pictureElement.classList.remove('effects__preview--marvin');
  pictureElement.classList.remove('effects__preview--phobos');
  pictureElement.classList.remove('effects__preview--sepia');
  pictureElement.classList.add('effects__preview--heat');
  sliderElement.classList.remove('hidden');

  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 1,
      max: 3,
    },
    step: 0.1,
    start: 3,
  });

  sliderElement.noUiSlider.on('update', () => {
    valueElement.value = sliderElement.noUiSlider.get();
    const valueElementValue = valueElement.value;
    pictureElement.style.filter = `brightness(${valueElementValue})`;
  });
}

chromeEffect.addEventListener('change', addChromeEffect);
sepiaEffect.addEventListener('change', addSepiaEffect);
marvinEffect.addEventListener('change', addMarvinEffect);
phobosEffect.addEventListener('change', addPhobosEffect);
heatEffect.addEventListener('change', addHeatEffect);
noEffect.addEventListener('change', addNoEffect);
