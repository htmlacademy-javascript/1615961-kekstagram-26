const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const pictureElement = document.querySelector('.img-upload__preview-picture');

const noEffectElement = document.querySelector('#effect-none');
const chromeEffectElement = document.querySelector('#effect-chrome');
const sepiaEffectElement = document.querySelector('#effect-sepia');
const marvinEffectElement = document.querySelector('#effect-marvin');
const phobosEffectElement = document.querySelector('#effect-phobos');
const heatEffectElement = document.querySelector('#effect-heat');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 50,
  step: 1,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
});

sliderElement.classList.add('hidden');

function deleteAllEffects () {
  pictureElement.classList.remove('effects__preview--sepia');
  pictureElement.classList.remove('effects__preview--chrome');
  pictureElement.classList.remove('effects__preview--marvin');
  pictureElement.classList.remove('effects__preview--phobos');
  pictureElement.classList.remove('effects__preview--heat');
  pictureElement.classList.remove('effects__preview--none');
}

function onNoEffectChange () {
  deleteAllEffects();
  pictureElement.classList.add('effects__preview--none');
  sliderElement.classList.add('hidden');
  noEffectElement.checked = true;

  pictureElement.style.filter = '';
}

function onChromeEffectChange () {
  deleteAllEffects();
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

function onSepiaEffectChange () {
  deleteAllEffects();
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

function onMarvinEffectChange () {
  deleteAllEffects();
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

function onPhobosEffectChange() {
  deleteAllEffects();
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

function onHeatEffectChange () {
  deleteAllEffects();
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

chromeEffectElement.addEventListener('change', onChromeEffectChange);
sepiaEffectElement.addEventListener('change', onSepiaEffectChange);
marvinEffectElement.addEventListener('change', onMarvinEffectChange);
phobosEffectElement.addEventListener('change', onPhobosEffectChange);
heatEffectElement.addEventListener('change', onHeatEffectChange);
noEffectElement.addEventListener('change', onNoEffectChange);

export {onNoEffectChange};
