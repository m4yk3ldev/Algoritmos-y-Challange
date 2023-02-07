const clickMeButton = document.createElement("button");
clickMeButton.id = "btn";
clickMeButton.innerHTML = "0";
clickMeButton.onclick = function () {
  clickMeButton.innerHTML = String(Number(clickMeButton.innerHTML) + 1);
};
document.body.appendChild(clickMeButton);
