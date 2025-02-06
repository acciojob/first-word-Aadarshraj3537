function firstWord(str) {
    if (!str) return ""; // Return empty string if input is empty

    // Trim leading spaces and split by the first space
    return str.trim().split(" ")[0];
}

function displayFirstWord() {
    let inputText = document.getElementById("inputText").value;
    let result = firstWord(inputText);
    document.getElementById("result").textContent = result ? `First word: ${result}` : "No word found!";
}

