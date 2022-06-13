import { useState } from "react";
import "./App.css";
import Words from "./components/Words";
import WordForm from "./components/WordForm";
import Scrambler from "./components/Scrambler";

export default function App() {
  const [words, setWords] = useState([]);
  const [scramble, setScramble] = useState([]);
  const [input, setInput] = useState("");

  const handleClear = () => {
    setWords([]);
    setScramble([]);
    setInput("");
  };

  return (
    <div className="App">
      <h2 className="word-scrambler">WORD SCRAMBLER</h2>
      <div className="word-scramble-container">
        <div>
          <WordForm
            words={words}
            setWords={setWords}
            scramble={scramble}
            setScramble={setScramble}
            input={input}
            setInput={setInput}
          />
          <Scrambler words={words} setScramble={setScramble} />
        </div>
        <Words words={words} />
      </div>
      <button
        className="btn"
        onClick={() => {
          handleClear();
        }}
      >
        Clear
      </button>
    </div>
  );
}
