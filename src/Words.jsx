import WordForm from "./WordForm";

export default function Words({ words, setWords }) {
  const addWord = (word) => {
    if (!word.text || /^\s*$/.test(word.text)) {
      return;
    }
    const newWord = [word, ...words];
    setWords(newWord);
  };

  return (
    <div className="word-list">
      <WordForm onSubmit={addWord} />
      <div>{words}</div>
    </div>
  );
}
