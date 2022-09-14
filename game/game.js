import {words} from "../modules/words.js";
import {refreshWords} from "../script.js"

refreshWords();
var oWords = JSON.parse(localStorage.getItem("oWords"));
localStorage.setItem("oWords",JSON.stringify(oWords));
console.log(oWords)
