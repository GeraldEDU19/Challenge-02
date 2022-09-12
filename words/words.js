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

words.addWord("Hola");

console.log("Prueba")

refresh();





function refresh() {

    divWords = document.getElementById("words");
    wordsArray = words.getWordsArray();

    for (let i = 0; i < wordsArray.length; i++) {
        console.log("Entró")
        let p = document.createElement("p");
        p.innerText = wordsArray[i];
        divWords.appendChild(p);
    }

}
