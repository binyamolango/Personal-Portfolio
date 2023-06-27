// store data

function saveData() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var text = document.getElementById("msg").value;

    localStorage.setItem("myName", name);
    localStorage.setItem("myEmail", email);
    localStorage.setItem("myText", text);
}

function loadData() {
    var myName = localStorage.getItem("myName");
    var myEmail = localStorage.getItem("myEmail");
    var myText = localStorage.getItem("myText");

    document.getElementById("name").innerHTML = myName;
    document.getElementById("email").innerHTML = myEmail;
    document.getElementById("msg").innerHTML = myText;
}
