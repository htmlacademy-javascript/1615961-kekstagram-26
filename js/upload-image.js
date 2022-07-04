const uploadImage = document.querySelector('#upload-file');
const uploadImageForm = document.querySelector('.img-upload__overlay');

uploadImage.addEventListener('submit', () => {
  uploadImageForm.classList.remove('hidden');
});
