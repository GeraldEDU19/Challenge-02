class words {

    constructor() {
        this.wordsArray = ["HTML", "CSS", "JAVASCRIPT", "SOFTWARE", "WEB", "JAVA", "PYTHON"];
    }
    addWord(word) {
        this.wordsArray.push(word);
    }
    getWordsArray() {
        return this.wordsArray;
    }

}

words = new words();
let divWords = document.getElementById("words");

refresh();

console.log("WORKS")





function refresh() {

    

    divWords = document.getElementById("words");
    wordsArray = words.getWordsArray();



    while (divWords.firstChild) {
        divWords.removeChild(divWords.firstChild);
    }

    for (let i = 0; i < wordsArray.length; i++) {

        let p = document.createElement("li");
        p.innerText = wordsArray[i];
        divWords.appendChild(p);

    }

}
