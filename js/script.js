var seacrch = document.querySelector('.interest-find-hotel');
var form = document.querySelector('form');
var visuality = false;
var checkIn = document.querySelector('.check-in-date-form');
var departure = document.querySelector('.departure-date-form');
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
  if (!checkIn.value || !departure.value){
    evt.preventDefault();
    form.classList.add('warning-animation');
  }
  if (!checkIn.value) {
    checkIn.classList.add('warning');
  }
  if (!departure.value) {
    departure.classList.add('warning');
  }
});

checkIn.addEventListener('click', function(){
  checkIn.classList.remove('warning');
});
departure.addEventListener('click', function(){
  departure.classList.remove('warning');
});


