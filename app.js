var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#text-Input");
var output = document.querySelector("#output");
var data = document.getElementById("para").innerHTML;

console.log(txtInput);
btnTranslate.addEventListener("click", function clickEventHandler() {
    console.log("Encountered a Click!");
    document.getElementById("dummy").innerHTML = data;
});
function myFn(){
    document.getElementById("btn").innerHTML = "neogcamp Guide";
    document.getElementById("btn").href = "https://neog.camp/guide/lesson-four";
    document.getElementById("btn").target = "_empty";
}
var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}
function clickeHandler(){
    var inputText = txtInput.vake;
    fetch(getTranslationURL(inputText))
    .then(response => response.json)
    .then(json => console.log(json))
}