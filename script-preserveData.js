
const fullNameInfo = document.getElementById('name');
const emailInfo = document.getElementById('email');
const messageInfo = document.getElementById('msg');
const localStorageKey = 'formData';

function savedFormData() {
  const formData = {
    name: fullNameInfo.value,
    email: emailInfo.value,
    message: messageInfo.value
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

fullNameInfo.addEventListener('input', savedFormData);
emailInfo.addEventListener('input', savedFormData);
messageInfo.addEventListener('input', savedFormData);

window.addEventListener('load', () => {
  const savedData = localStorage.getItem(localStorageKey);
  if (savedData) {
    const formData = JSON.parse(savedData);
    fullNameInfo.value = formData.name;
    emailInfo.value = formData.email;
    messageInfo.value = formData.message;
  }
});