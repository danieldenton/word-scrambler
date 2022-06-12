import { useState } from "react";

export default function WordForm({ words, setWords }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const addWord = () => {
    setWords([...words, input]);
    setInput("");
  };

  return (
    <div className="word-form">
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
    </div>
  );
}
