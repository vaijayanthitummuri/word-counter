document.addEventListener("DOMContentLoaded", function () {
    const wordsTextarea = document.querySelector(
      ".word-counter-container .words"
    );
    const countBtn = document.querySelector(".word-counter-container .count-btn");
    const resetBtn = document.querySelector(".word-counter-container .reset-btn");
    const wordCount = document.querySelector(
      ".word-counter-container .word-count span"
    );
  
    const countWords = () => {
      let words = wordsTextarea.value;
      let wordsTrimmed = words.replace(/\s+/g, " ").trim();
      let splitWords = wordsTrimmed.split(" ");
  
      let numberOfWords = splitWords.length;
      if (splitWords[0] == "") {
        numberOfWords = 0;
      }
  
      wordCount.innerHTML = numberOfWords;
    };
  
    const resetCount = () => {
      wordsTextarea.value = ""; // Reset the textarea
      wordCount.innerHTML = "0"; // Reset the word count
    };
  
    countBtn.addEventListener("click", countWords);
    resetBtn.addEventListener("click", resetCount);
  });