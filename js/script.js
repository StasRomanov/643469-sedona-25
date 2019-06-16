//скрываем форму и анимируем ее
var seacrch = document.querySelector('.interest-find-hotel');
var form = document.querySelector('.form-container');
var visuality = false;
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
