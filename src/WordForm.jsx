import { useState } from "react";

export default function WordForm({ setWords, words }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form>
      <label className="input-form">Input words here:</label>
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
          onClick={(e) => {
            setWords(e.target.value);
          }}
        >
          Add word
        </button>
      </div>
    </form>
  );
}
