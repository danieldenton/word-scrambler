export default function Words({ words }) {
  const wordsToScramble = words.map((word, index) => {
    return <div key={index}>{word}&nbsp;</div>;
  });
  return <div className="words">{wordsToScramble}</div>;
}
