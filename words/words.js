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

refresh();
console.log("Frescos");






function refresh() {
    const divWords = document.getElementById("words");
    words = new words();
    wordsArray = words.getWordsArray();
    for (let i = 0; i < wordsArray.length; i++) {
        console.log("Entró")
        let p = document.createElement("p");
        p.innerText = wordsArray[i];
        divWords.appendChild(p);
    }
}
