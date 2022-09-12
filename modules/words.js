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


function get_localStorage(){
    var wordsArray = localStorage.getItem("wordsArray");
    console.log(wordsArray)
}

function set_localStorage(){
    if(JSON.parse(localStorage.getItem("wordsArray")).length > wordsArray)
    localStorage.setItem("wordsArray",JSON.stringify(wordsArray));
}




