import {words} from "../modules/words.js";
import {refreshWords} from "../script.js"
refresh();






function refresh() {

    var divWords = document.getElementById("words");
    //var oWords = new words();

    refreshWords();
    var oWords = JSON.parse(localStorage.getItem("oWords"));
    



    while (divWords.firstChild) {
        divWords.removeChild(divWords.firstChild);
    }

    for (let i = 0; i < oWords.wordsArray.length; i++) {

        let li = document.createElement("li");
        li.innerText = oWords.wordsArray[i];
        divWords.appendChild(li);

    }

   

}


