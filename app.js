var button = document.querySelector("#btn-translate");
var input = document.querySelector("#input");
var output = document.querySelector("#output");


var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong happend please try after sometime")
}


function clickHandler() {
    var inputText = input.value; 

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            output.innerText = translatedText; // output
           })
        .catch(errorHandler)
};

button.addEventListener("click", clickHandler)
