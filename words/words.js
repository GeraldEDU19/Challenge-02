class words{

    constructor(){
        this.wordsArray =[];
    }
    addWord(word){
        this.wordsArray.push(word)
    }
    getWordsArray(){
        return this.wordsArray;
    }
    
}

console.log("Hola")
words = words();
words.addWord("Hola")
console.log(words.getWordsArray())

function refresh(){
    
}
