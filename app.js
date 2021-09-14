var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#text-Input");
var output = document.querySelector("#output");
var data = document.getElementById("para").innerHTML;

console.log(txtInput);
btnTranslate.addEventListener("click", function clickEventHandler() {
    console.log("Encountered a Click!");
    document.getElementById("dummy").innerHTML = data;
});