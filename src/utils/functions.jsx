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

export const getDates = (startDate, numberOfDays) => {
  const dates = [];
  for (let i = 0; i < numberOfDays; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    const options = { weekday: "short", month: "long", day: "numeric" };
    dates.push(date.toLocaleDateString("en-US", options));
  }
  return dates;
};
