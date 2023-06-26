document.getElementById("form").addEventListener("submit", (e) => {
    const emailVal = document.getElementById("email").value;
    const emailErr = document.getElementById("error_message");
    const validate = emailVal.toLowerCase();
    const form = document.getElementById("form");
    if (emailVal === validate) {
      emailErr.textContent = "";
      form.submit();
    } else {
      e.preventDefault();
      emailErr.textContent = "Please write your email in lower case!";
    }
  });