var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#text-Input");
var output = document.querySelector("#output");

console.log(txtInput);
btnTranslate.addEventListener("click", function clickEventHandler() {
    console.log("Encountered a Clicked!");
    output.innerText = "tanslated: "+ txtInput.value;
});