refresh()


function refreshWords(){

    var wordsArray = JSON.parse(localStorage.getItem("wordsArray"));
    
    if(wordsArray === null){
        wordsArray = ["HTML", "CSS", "JAVASCRIPT", "SOFTWARE", "WEB", "JAVA", "PYTHON"];
        localStorage.setItem("wordsArray",JSON.stringify(oWords));
        
    }

    return wordsArray;
    
}





function refresh() {

    var divWords = document.getElementById("words");
    //var oWords = new words();
    console.log(refreshWords());
    var oWords = refreshWords();


    while (divWords.firstChild) {
        divWords.removeChild(divWords.firstChild);
    }

    for (let i = 0; i < oWords.wordsArray.length; i++) {

        let li = document.createElement("li");
        li.innerText = oWords.wordsArray[i];
        divWords.appendChild(li);

    }

   

}


0