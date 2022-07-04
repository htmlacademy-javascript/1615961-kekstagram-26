const uploadImage = document.querySelector('#upload-file');
const uploadImageForm = document.querySelector('.img-upload__overlay');

const uploadImageClose = document.querySelector('#upload-cancel');

function OpenForm () {
  uploadImageForm.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
}

function CloseForm () {
  uploadImageForm.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
}

function onFormEscKeydown () {
  document.addEventListener ('keydown', (evt) => {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      uploadImageForm.classList.add('hidden');
    }
  });
}

uploadImage.addEventListener('change', () => {
  OpenForm();
});

uploadImageClose.addEventListener('click', () => {
  CloseForm();
});

document.addEventListener('keydown', (evt)=> {
  onFormEscKeydown(evt);
});
