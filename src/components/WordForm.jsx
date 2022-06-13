import { useState } from "react";

export default function WordForm({
  input,
  setInput,
  words,
  setWords,
  scramble,
  setScramble,
}) {
  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const addWord = () => {
    setWords([...words, input]);
    setScramble([...scramble, input]);
    setInput("");
  };

  return (
    <div className="word-form">
      <div className="input-div">
        <input
          type="text"
          placeholder="add a word here"
          value={input}
          onChange={handleChange}
          ref={(ref) => ref && ref.focus()}
        />
      </div>
      <button
        className="btn"
        onClick={() => {
          addWord();
        }}
      >
        Add word
      </button>
    </div>
  );
}
