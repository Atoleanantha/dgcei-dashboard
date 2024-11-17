function convertToISTWithDayAndTime(zDateString) {
    const utcDate = new Date(zDateString); // Parse the input as UTC
   
    const istDate = new Date(utcDate.getTime());

    // Extract day, date, hours, minutes, seconds, and milliseconds
    const day = istDate.toLocaleString('en-US', { weekday: 'long' });
    const date = istDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    let hours = istDate.getHours();
    const minutes = istDate.getMinutes();
    const seconds = istDate.getSeconds();
    const milliseconds = istDate.getMilliseconds();

    // Determine AM/PM
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert 24-hour to 12-hour format

    // Format IST time
    const time = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds} ${ampm}`;

    // Return the formatted string
    return `${day}, ${date}, ${time.slice(0,5)} ${time.slice(-2)}`;
}

export default convertToISTWithDayAndTime;
