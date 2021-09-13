var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#text-Input");

console.log(txtInput);
btnTranslate.addEventListener("click", function clickEventHandler() {
    console.log("Encountered a Clicked!");
    console.log("input", txtInput.value);
});