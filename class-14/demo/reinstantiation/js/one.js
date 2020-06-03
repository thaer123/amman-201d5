'use strict';

function getCatsFromLS() {
  var cats = localStorage.getItem('cats');
  if (cats) {
    allCats = JSON.parse(cats);
    render();
  }
}
getCatsFromLS();

catform.addEventListener('submit', handleCatSubmit);
function handleCatSubmit(e) {
  e.preventDefault();
  new Cat(e.target.kitteh.value);
  catform.reset();
  render();
  var catsObj = JSON.stringify(allCats);
  localStorage.setItem('cats', catsObj);
}
