class words{

    constructor(){
        this.wordsArray =["HTML","CSS","JAVASCRIPT","SOFTWARE","WEB","JAVA","PYTHON"];
    }
    addWord(word){
        this.wordsArray.push(word);
    }
    getWordsArray(){
        return this.wordsArray;
    }
    
}


words = new words();

words.addWord("Hola-------------");
console.log(words.getWordsArray());

function refresh(){
    
}
