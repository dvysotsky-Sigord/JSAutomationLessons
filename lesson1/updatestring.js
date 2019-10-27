function updateString(text, letterIndex, letter) {
    let words = text.split(' ');
    let newString = [];

    for (let w of words) {
        if (w.length - 1 >= letterIndex && letterIndex > 0) {
            newString.push(w.substring(0, letterIndex - 1) + letter + w.substring(letterIndex, w.length));
        } else {
            newString.push(w);
        }
    }

    return newString.join(' ');
}

console.log(updateString("test string test ae", 2, "A"));