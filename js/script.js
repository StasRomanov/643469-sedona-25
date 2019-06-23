var seacrch = document.querySelector('.interest-find-hotel');
var form = document.querySelector('form');
var checkIn = document.querySelector('.check-in-date-form');
var departure = document.querySelector('.departure-date-form');

form.classList.add('search-hidden');
seacrch.addEventListener('click', function (evt) {
  evt.preventDefault();
  form.classList.toggle('search-hidden');
  form.classList.add('form-animation');
  form.classList.remove('warning-animation');
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

  form.classList.remove('form-animation');
});
departure.addEventListener('click', function(){
  departure.classList.remove('warning');
  form.classList.remove('form-animation');
});


