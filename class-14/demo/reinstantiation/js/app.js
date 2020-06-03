'use strict';

var allCats = [];
var catform = document.getElementById('catform');
var catlist = document.getElementById('catlist');

function Cat(name) {
  this.name = name;
  allCats.push(this);
}

function render() {
  for (var i = 0; i < allCats.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = allCats[i].name;
    catlist.appendChild(liEl);
  }
}


