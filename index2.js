// 1).

// Create a JavaScript code that accepts a string of lowercase letters. Print the word followed by how many consonants and vowels it has.

// "a", "e", "i", "o", and "u" are considered vowels. 

// Every other letter is considered a consonant.

// Hint: Define two variables that keep track of the number of consonants and vowels.


function conandvowelcheck(str){
    let vowelCounter = 0
    let consonantCounter = 0
for (let i = 0; i < str.length; i++){
    let letter = str[i];
    if(
        letter === "a" ||
        letter === "e" ||
        letter === "i" ||
        letter === "o" ||
        letter === "u" 
    ){
        vowelCounter++;
    }else{
        consonantCounter++
    }

    }
    console.log(`${str} has ${consonantCounter} consonants and ${vowelCounter} vowels`);
} 
conandvowelcheck("hello"); // "hello has 3 consonants and 2 vowels"
conandvowelcheck("ukelele"); // "ukelele has 3 consonants and 4 vowels"
conandvowelcheck("awesome"); // "awesome has 3 consonants and 4 vowels"
conandvowelcheck("onomonopia"); // "onomonopia has 4 consonants and 6 vowels"
conandvowelcheck("textbook"); // "textbook has 5 consonants and 3 vowels"
