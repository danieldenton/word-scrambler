import { useState } from "react";
import "./App.css";
import Words from "./components/Words";
import ScrambledWords from "./components/ScrambledWords";
import WordForm from "./components/WordForm";
import Scrambler from "./components/Scrambler";

export default function App() {
  const [words, setWords] = useState([]);
  const [scramble, setScramble] = useState([]);

  return (
    <div className="App">
      <header className="word-scrambler">WORD SCRAMBLER</header>
      <div className="word-div">
        <WordForm words={words} setWords={setWords} />
        <Words words={words} />
      </div>
      <div className="scramble-div">
        <Scrambler words={words} setScramble={setScramble} />
        <ScrambledWords scramble={scramble} />
      </div>
    </div>
  );
}
