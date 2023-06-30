const form = document.getElementById('form');

function emailValidation(e) {
  const emailVal = document.getElementById('email').value;
  const emailErr = document.getElementById('error_message');
  const validate = emailVal.toLowerCase();
  if (emailVal === validate) {
    emailErr.textContent = '';
    form.submit();
  } else {
    e.preventDefault();
    emailErr.textContent = 'Please write your email in lower case!';
  }
}

form.addEventListener('submit', emailValidation);