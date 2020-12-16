module.exports = Phrase;

// Reverses a string
function reversify(str) {
  return Array.from(str).reverse().join('');
}

// Defines a Phrase object
function Phrase(content) {
  this.content = content;

  this.processedContent = function processedContent() {
    return this.content.toLowerCase();
  }

  this.isPalindrome = function isPalindrome() {
    return this.processedContent() === reversify(this.processedContent());
  }
}
