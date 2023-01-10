import { useState } from "react";
import words from "./wordList.json";

function App() {
  // This is the word that the user has to guess
  const [wordToGuess, setWordToGuess] = useState<string>(() => {
    // Get a random word from the word list
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <div className="flex max-w-[800px] flex-col gap-8 mt-0 mb-0 ml-auto mr-auto items-center">
      <div className="text-[2rem] text-center text-3xl">Lose Win</div>
    </div>
  );
}

export default App;
