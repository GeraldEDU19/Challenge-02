class words{

    constructor(){
        this.wordsArray =[];
    }
    static addWord(word){
        this.wordsArray.push(word)
    }
    static getWordsArray(){
        return this.wordsArray;
    }
    
}

console.log("Hola")
words = new words();
words.addWord("Hola-------------");
var prueba = words.getWordsArray();
console.log(prueba);

function refresh(){
    
}
