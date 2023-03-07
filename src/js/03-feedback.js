import throttle from "lodash.throttle";

const storageKey = 'feedback-form-state';

const form = document.querySelector(".feedback-form");

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onFormSubmit);

let formData = JSON.parse(localStorage.getItem(storageKey)) || {};
const { email, message } = form.elements;
reloadPage();

function onInput(evt) {
  formData = { email: email.value, message: message.value};
  localStorage.setItem(storageKey, JSON.stringify(formData));
}

function reloadPage() {
  if(formData) {
    email.value = formData.email || '';
    message.value = formData.message || '';
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log({ email: email.value, message: message.value });

  if (email.value === '' || message.value === '') {
    return alert('Porfavor llenar todos lo campos requeridos')
  }

  localStorage.removeItem(storageKey);
  evt.currentTarget.reset();
  formData = {};
}

