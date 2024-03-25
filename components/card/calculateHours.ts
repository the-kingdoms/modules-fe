export function calculateHours(endTime: string, startTime: string) {
  const [endHour, endMinutes] = endTime
    .split(":")
    .map(num => parseInt(num, 10));
  const [startHour, startMinutes] = startTime
    .split(":")
    .map(num => parseInt(num, 10));

  const totalEndMinutes = endHour * 60 + endMinutes;
  const totalStartMinutes = startHour * 60 + startMinutes;
  const totalMinutes = totalEndMinutes - totalStartMinutes;

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  let result = `${hours}시간`;
  if (minutes > 0) {
    result += ` ${minutes}분`;
  }

  return result;
}
