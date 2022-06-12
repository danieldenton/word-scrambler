export default function Words({ words }) {
  const wordsToScramble = words.map((word, index) => {
    return (
      <div key={index}>
        <span>{word}</span>
      </div>
    );
  });
  return (
    <div className="words">
      <div>{wordsToScramble}</div>
    </div>
  );
}
