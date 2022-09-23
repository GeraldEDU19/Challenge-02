var wordsArray;

    wordsArray = JSON.parse(localStorage.getItem("wordsArray"));
    
    if(wordsArray === null){
        wordsArray = ["HTML", "CSS", "JAVASCRIPT", "SOFTWARE", "WEB", "JAVA", "PYTHON"];
        localStorage.setItem("wordsArray",JSON.stringify(wordsArray));
        
    }

    

    refresh();





function refresh() {

    var words = wordsArray;
    var divWords = document.getElementById("words");
    while (divWords.firstChild) {
        divWords.removeChild(divWords.firstChild);
    }
    for (let i = 0; i < words.length; i++) {

        let li = document.createElement("li");
        li.innerText = words[i];
        divWords.appendChild(li);

    }
}

function addWord(){
    var word = document.getElementById("inputWord").value;
    var tempWords = JSON.parse(localStorage.getItem("wordsArray"));
    tempWords.push(word);
    wordsArray = tempWords;
    localStorage.setItem("wordsArray",JSON.stringify(wordsArray));
    refresh();
}


0