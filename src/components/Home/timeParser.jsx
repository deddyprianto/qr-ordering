export const timeParser = (inputTimeString) => {
  const parsedTime = new Date(`2000-01-01T${inputTimeString}`);
  const formattedTime = parsedTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
  
  return formattedTime;
}