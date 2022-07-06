const scaleButtonMinus = document.querySelector('.scale__control--smaller');
const scaleButtonPlus = document.querySelector('.scale__control--bigger');
const scaleField = document.querySelector('.scale__control--value');

let scaleFieldValue = 100;
scaleField.value = `${scaleFieldValue }%`;

function scalePlus () {
  if (scaleFieldValue <= 75) {
    scaleFieldValue = Number(scaleFieldValue) + 25;
    scaleField.value = `${scaleFieldValue }%`;
    return `${scaleFieldValue  }%`;
  }
}

function scaleMinus () {
  if (scaleFieldValue >= 50) {
    scaleFieldValue = scaleFieldValue - 25;
    scaleField.value = `${scaleFieldValue }%`;
    return `${scaleFieldValue  }%`;
  }
}

scaleButtonPlus.addEventListener ('click', scalePlus);
scaleButtonMinus.addEventListener ('click', scaleMinus);
