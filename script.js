function saveText(text) {
    localStorage.setItem('savedText', text);
    displaySavedText();
}

function displaySavedText() {
    var savedText = localStorage.getItem('savedText');
    if (savedText) {
        document.getElementById('displayText').textContent = savedText;
    }
}


displaySavedText();