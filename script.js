function firstWord(str) {
    if (!str) return ""; 


    return str.trim().split(" ")[0];
}

function displayFirstWord() {
    let inputText = document.getElementById("inputText").value;
    let result = firstWord(inputText);
    document.getElementById("result").textContent = result ? `First word: ${result}` : "No word found!";
}

