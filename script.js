import { words } from "./modules/words.js";




export function refreshWords(){
    var oWords = JSON.parse(localStorage.getItem("oWords"));
    
    if(oWords === null){
       
        oWords = new words()
        localStorage.setItem("oWords",JSON.stringify(oWords));
        
    }
}

