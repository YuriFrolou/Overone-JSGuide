function closeAlertBox(){
    const alertBox = document.querySelector(".alertBox");
    const alertClose = document.querySelector(".alertClose");
    alertBox.style.visibility = "hidden";
    alertClose.style.visibility = "hidden";
}

window.alert = function(msg){
    const boxClassName = "alertBox";
    const closeClassName = "alertClose";
    alertBox = document.createElement("div");
    document.body.appendChild(alertBox);
    alertBox.className = boxClassName;
    alertBox.innerHTML = msg;
    alertClose = document.createElement("img");
    alertClose.src="images/Close.svg";
    alertClose.className = closeClassName;
    alertBox.appendChild(alertClose);
    alertBox.style.visibility = "visible";
    alertClose.style.visibility = "visible";
    alertClose.onclick = closeAlertBox;
};
