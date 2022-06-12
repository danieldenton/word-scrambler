import { useState } from "react";
import "./App.css";
import Words from "./Words";

export default function App() {
  const [words, setWords] = useState([]);

  const handleScramble = (words) => {
    for (let i = words.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [words[i], words[j]] = [words[j], words[i]];
    }
    return words;
  };
  return (
    <div className="App">
      <header className="word-scrambler">WORD SCRAMBLER</header>
      <Words />
      <div className="word-list">{words}</div>
    </div>
  );

  console.log(words);
}
