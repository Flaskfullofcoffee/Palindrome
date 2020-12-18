module.exports = Phrase;

// let test = `Madam, I'm Adam`;
// Reverses a string
function reversify(str) {
  return Array.from(str).reverse().join('');
}
// function onlyLetters(str) {
//   return str.replace(/\W/g, '');
// }

// Defines a Phrase object
function Phrase(content) {
  this.content = content;

  this.letters = function letters() {
    return this.content.replace(/\W/g, '');
  }

  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  this.isPalindrome = function isPalindrome() {
    if (this.processedContent()) {
      return this.processedContent() === reversify(this.processedContent());
    } else {
      return false;
    }
  }
}
