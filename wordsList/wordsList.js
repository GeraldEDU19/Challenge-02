
var divWords = document.getElementById("words");
var wordsArray;
refresh();

wordsList.addWord("Hola");

refresh();

console.log("WORKS")





function refresh() {

    

    divWords = document.getElementById("words");
    wordsArray = wordsList.getWordsArray();



    while (divWords.firstChild) {
        divWords.removeChild(divWords.firstChild);
    }

    for (let i = 0; i < wordsArray.length; i++) {

        let p = document.createElement("li");
        p.innerText = wordsArray[i];
        divWords.appendChild(p);

    }

   

}


