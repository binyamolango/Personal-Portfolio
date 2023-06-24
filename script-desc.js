const closePopup = document.getElementById("close-popup");

function closePopupFunc(e) {
    window.close();
}

closePopup.addEventListener("click", closePopupFunc);
