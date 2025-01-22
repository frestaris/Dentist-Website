export function addLineBreakAfterWords(text, wordsPerSection, gapSize) {
  const words = text.split(" ");
  const result = [];

  for (let i = 0; i < words.length; i += wordsPerSection) {
    result.push(
      <span key={`text-${i}`} className="block">
        {words.slice(i, i + wordsPerSection).join(" ")}
      </span>
    );

    if (i + wordsPerSection < words.length) {
      result.push(<p key={`gap-${i}`} style={{ marginBottom: gapSize }}></p>);
    }
  }

  return result;
}
