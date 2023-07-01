const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('msg');
const storageKey = 'formData';

function saveFormData() {
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(storageKey, JSON.stringify(formData));
}

nameInput.addEventListener('input', saveFormData);
emailInput.addEventListener('input', saveFormData);
messageInput.addEventListener('input', saveFormData);

window.addEventListener('load', () => {
  const savedData = localStorage.getItem(storageKey);
  if (savedData) {
    const formData = JSON.parse(savedData);
    nameInput.value = formData.name;
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
});