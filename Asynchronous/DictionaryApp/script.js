document.addEventListener("DOMContentLoaded", () => {
  let searchButton = document.getElementById("search_button");
  let wordTitle = document.getElementById("word_title");
  let wordPhonetic = document.getElementById("phonetic");
  let playVoiceButton = document.getElementById("play_voice");
  let wordDefinition = document.getElementById("word_definition");
  let errorMessage = document.getElementById("error");
  let wordExample = document.getElementById("word_example");

  searchButton.addEventListener("click", async () => {
    let searchInput = document.getElementById("search_input").value.trim();
    if (!searchInput) return;
    console.log(searchInput);
    try {
      let wordData = await fetchWordData(searchInput);
      displayWordData(wordData);
    } catch (error) {
      showError();
    }
  });
  playVoiceButton.addEventListener("click", function () {
    const word = wordTitle.textContent;
    console.log("Pronounce:", word); // Debug log
    if (word && word !== "---") {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.rate = 0.8
      utterance.lang = "en-US";
      speechSynthesis.speak(utterance);
    } else {
      alert("Please Enter a valid word first!");
    }
  });

  async function fetchWordData(word) {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    let response = await fetch(url);
    if (!response.ok) throw new Error("Word not found");
    let data = await response.json();
    console.log(data);
    return data;
  }
  function displayWordData(showData) {
    const wordInfo = showData[0];

    wordTitle.textContent = wordInfo.word;
    wordPhonetic.textContent =
      wordInfo.phonetic || wordInfo.phonetics[0]?.text || "N/A";

    wordDefinition.textContent =
      wordInfo.meanings[0]?.definitions[0]?.definition ||
      "Definition not available.";

    wordExample.textContent =
      wordInfo.meanings[0]?.definitions[0]?.example || "No example available.";
  }

  function showError() {
    wordTitle.textContent = "---";
    wordPhonetic.textContent = "---";
    wordDefinition.textContent = "---";
    wordExample.textContent = "---";
    errorMessage.textContent = "Unexpected Error Occur!";
  }
});
