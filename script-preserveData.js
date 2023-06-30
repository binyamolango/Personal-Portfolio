// store data
const form = document.getElementById('form');
const data = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    text : document.getElementById("msg").value
};

function storeData() {
    localStorage.setItem('form', JSON.stringify(data));
}

form.addEventListener('input', storeData);

const formObj = JSON.parse(localStorage.getItem('form'));

document.getElementById('name').value = formObj.name;
document.getElementById('email').value = formObj.email;
document.getElementById('msg').value = formObj.text;