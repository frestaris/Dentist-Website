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
  let currentDate = new Date(startDate);

  for (let i = 0; i < numberOfDays; i++) {
    while (currentDate.getDay() === 6 || currentDate.getDay() === 0) {
      currentDate.setDate(currentDate.getDate() + 1);
    }

    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
};

export const adjustForWeekends = (date) => {
  const newDate = new Date(date);
  while (newDate.getDay() === 6 || newDate.getDay() === 0) {
    newDate.setDate(newDate.getDate() + 1);
  }
  return newDate;
};
