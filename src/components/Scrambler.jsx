import { useState } from "react";

export default function Scrambler({ words, setScramble }) {
  const handleScramble = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    setScramble(a);
    console.log(a);
  };

  return (
    <button
      onClick={() => {
        handleScramble(words);
      }}
    >
      Scramble
    </button>
  );
}
