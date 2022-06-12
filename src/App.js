import { useState } from "react";
import "./App.css";
import Words from "./Words";
import ScrambledWords from "./ScrambledWords";

export default function App() {
  const [words, setWords] = useState([]);

  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const addWord = () => {
    setWords([...words, input]);
    setInput("");
  };

  const handleScramble = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
    console.log(a);
  };

  return (
    <div className="App">
      <header className="word-scrambler">WORD SCRAMBLER</header>

      <h2 className="input-label">Input words here:</h2>
      <input
        type="text"
        placeholder="add a word here"
        value={input}
        className="input"
        onChange={handleChange}
      />
      <div>
        <button
          className="submit-btn"
          onClick={() => {
            addWord();
          }}
        >
          Add word
        </button>
      </div>
      <Words words={words} />
      <ScrambledWords words={words} />
    </div>
  );
}
