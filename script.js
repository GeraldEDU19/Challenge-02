refreshWords()


function refreshWords(){

    var wordsArray = JSON.parse(localStorage.getItem("wordsArray"));
    
    if(wordsArray === null){
        wordsArray = ["HTML", "CSS", "JAVASCRIPT", "SOFTWARE", "WEB", "JAVA", "PYTHON"];
        localStorage.setItem("wordsArray",JSON.stringify(oWords));
        
    }

    return wordsArray;
    
}

