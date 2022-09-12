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

const divWords = document.getElementById("words");
for(let i = 0; i < wordsArray.length; i++){
    console.log("Entró")
    let p = document.createElement("p");
    p.innerText = wordsArray[i];
    divWords.appendChild(h1);
}

words = new words();

words.addWord("Hola-------------");
console.log(words.getWordsArray());

function refresh(){
    
}
