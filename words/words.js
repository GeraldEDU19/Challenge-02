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
words = new words();
words.addWord("Hola-------------")
var prueba = words.getWordsArray
console.log(prueba)

function refresh(){
    
}
