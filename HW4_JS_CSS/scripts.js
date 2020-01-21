let words = [];
words.length = 3;

let changedWords = [];


var startButton = document.querySelector("#start"),
    changeButton = document.querySelector("#change"),
    introSection = document.querySelector("#introSection");
    swapSection = document.querySelector("#swapSection")


startButton.addEventListener("click",askForWords,false);
changeButton.addEventListener("click",changeWords,false);

function askForWords()
{
    for (i = 0; i < words.length; i++)
    {
        words[i] = prompt('Please enter word number ' + (i+1));
        displayWords(words[i],"list");
    } 
    
    changeButton.style.display = "block";
}

function changeWords()
{
    introSection.style.display ="none";
    swapSection.style.display ="block"

    changedWords = words.map(word => swapFirstAndLast(word));
    for (i = 0; i < changedWords.length; i++)
    {
        displayWords(changedWords[i],"swappedList");
    }    
}

function displayWords(word, id){
    const formattedWord = "<li>" + word + "</li>";
    document.getElementById(id).innerHTML += formattedWord;
}

function swapFirstAndLast(word)
{
    let finalWord;

    const firstLetter = word[0];
    const lastLetter = word[word.length-1];
    finalWord = lastLetter + word.slice(1, word.length-1) + firstLetter;
    return finalWord;
}