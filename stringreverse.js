function reverseWordsInSentence(sentence) {
  const words = sentence.split(" ");
  const reversedWords = words.map(reverseWord);
  return reversedWords.join(" ");
}

function reverseWord(word) {
  return word.split("").reverse().join("");
}


const inputSentence = "This is a sunny day";
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log("Reversed sentence: " + reversedSentence);
