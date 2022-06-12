import { useState } from "react";

export default function ScrambledWords({ words }) {
  const [scramble, setScramble] = useState([]);

  const handleScramble = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    setScramble(a);
    console.log(a);
  };

  return (
    <div className="scrambled-words">
      <button
        onClick={() => {
          handleScramble(words);
        }}
      >
        Scramble
      </button>
      <div className="scramble">{scramble}</div>
    </div>
  );
}
