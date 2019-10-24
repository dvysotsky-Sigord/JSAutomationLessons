function isPalindrome(text) {
    const reversedString = text.toLowerCase().split('').reverse().join('');

    return reversedString === text.toLowerCase();
}

function verifyPalindrom(text) {
    if (isPalindrome(text)) {
        console.log("String [" + text + "] is palindrome");
    } else {
        console.log("String [" + text + "] is NOT palindrome");
    }
}

verifyPalindrom("Bob");
verifyPalindrom("test tset");
verifyPalindrom("Test String");