import words from "./words.js";


function linearSearch(needle, haystack){    
    let start = 0; //Start at the beginning
    let end = haystack.length; //Search to the end
    
    for (let i = start; i < end; i++) {
        if (needle == haystack[i]) {
            return true;
        }
    }
    return false;
}

export default function(word){
    return linearSearch(word, words);
}
