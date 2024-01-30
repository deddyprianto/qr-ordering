export const dateFormatter = ( dateString ) => {
  const date = new Date(dateString);
  if(date=="Invalid Date") return "";
  // Format date part
  const day = String(date.getDate()).padStart(2, '0');
  const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);
  const year = date.getFullYear();

  // Format time part
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedTime = `${hours % 12 || 12}:${minutes} ${ampm}`;

  // Combine date and time parts
  const formattedDate = `${day} ${month} ${year} • ${formattedTime}`;

  return formattedDate;
}