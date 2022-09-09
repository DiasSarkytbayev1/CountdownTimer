const form = document.forms.main;
const date = form.event;
const button = document.querySelector('.sub');

function datevalue() {
  console.log(date.value);
}

button.addEventListener('click', datevalue);

