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

console.log("----------------------------")
words = new words();
wordsArray = words.getWordsArray();

const divWords = document.getElementById("words");

for(let i = 0; i < wordsArray.length; i++){
    console.log("Entró")
    let p = document.createElement("p");
    p.innerText = wordsArray[i];
    divWords.appendChild(p);
}



words.addWord("Hola-------------");


function refresh(){
    
}
