export function formatTimestamp(timesatamp: number): string {
  const date = new Date(timesatamp);
  const year = date.getFullYear();
  const month = date.toLocaleString('default', { month: 'short' });
  const day = date.getDate();
  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');

  return `${month} ${day} ${year}, ${hour}:${minute}`;
}
