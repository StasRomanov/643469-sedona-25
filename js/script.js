var seacrch = document.querySelector('.interest-find-hotel');
var form = document.querySelector('form');
var visuality = false;
var checkIn = document.querySelector('.check-in-date-form');
var departure = document.querySelector('.departure-date-form');
var cnt1Value = 2;
var cnt2Value = 1;
var cnt1 = document.querySelector('.cnt1');
var cnt2 = document.querySelector('cnt2');
var minus1 = document.querySelector('.minus-container1');
var plus1 = document.querySelector('.plus-container1');
var plus2 = document.querySelector('.plus-container2');
var minus2 = document.querySelector('.minus-container2');
form.classList.add('search-hidden');
seacrch.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (visuality === false) {
    form.classList.remove('search-hidden');
    form.classList.add('form-animation');
    visuality = true;
  }
  else {
    form.classList.add('search-hidden');
    form.classList.remove('form-animation');
    visuality = false;
  }
});

form.addEventListener('submit', function(evt){
  if (checkIn.value === ''){
    evt.preventDefault();
    checkIn.classList.add('warning');
    departure.classList.add('warning');
  }
});

checkIn.addEventListener('click', function(){
  checkIn.classList.remove('warning');
});
departure.addEventListener('click', function(){
  departure.classList.remove('warning');
});

minus1.addEventListener('click', function () {
  if (cnt1Value < 0) {
    cnt1Value = 0;
  }
  else {
    cnt1.innerText = cnt1Value--;
  }
});

plus1.addEventListener('click', function () {
  if (cnt1Value > 9) {
    cnt1Value = 9;
  }
  else {
    cnt1.innerText = cnt1Value++;
  }
});

minus2.addEventListener('click', function () {
  if (cnt2Value < 0) {
    cnt2Value = 0;
  }
  else {
    cnt2.innerText = cnt2Value--;
  }
});

plus2.addEventListener('click', function () {
  if (cnt2Value > 9) {
    cnt2Value = 9;
  }
  else {
    cnt2.innerText = cnt2Value++;
  }
});
