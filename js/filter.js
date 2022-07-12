function showImageFilters () {
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
}

const defaultFilterButton = document.querySelector('#filter-default');
const discussedFilterButton = document.querySelector('#filter-discussed');
const randomFilterButton = document.querySelector('#filter-random');

defaultFilterButton.addEventListener('click', () => {
  discussedFilterButton.classList.remove('img-filters__button--active');
  randomFilterButton.classList.remove('img-filters__button--active');
  defaultFilterButton.classList.add('img-filters__button--active');
});

discussedFilterButton.addEventListener('click', () => {
  defaultFilterButton.classList.remove('img-filters__button--active');
  randomFilterButton.classList.remove('img-filters__button--active');
  discussedFilterButton.classList.add('img-filters__button--active');
});

randomFilterButton.addEventListener('click', () => {
  discussedFilterButton.classList.remove('img-filters__button--active');
  defaultFilterButton.classList.remove('img-filters__button--active');
  randomFilterButton.classList.add('img-filters__button--active');
});

export {showImageFilters};
