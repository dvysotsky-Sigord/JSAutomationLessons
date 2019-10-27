function isPalindrome(text) {
    const reversedString = text.toLowerCase().split('').reverse().join('');

    return reversedString === text.toLowerCase();
}

function verifyPalindrom(text) {
    if (isPalindrome(text)) {
        return "String [" + text + "] is palindrome";
    } else {
        return "String [" + text + "] is NOT palindrome";
    }
}

console.log(verifyPalindrom("Bob"));
console.log(verifyPalindrom("test tset"));
console.log(verifyPalindrom("Test String"));