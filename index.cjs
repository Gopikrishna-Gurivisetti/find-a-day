
function getDayOfBirth(dateOfBirth) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
    // Split the date string based on either '-' or '/'
    const parts = dateOfBirth.split(/[-/]/);
    
    // Extract day, month, and year from parts
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // Months are 0-based in JavaScript (0 = January, 1 = February, ..., 11 = December)
    const year = parseInt(parts[2], 10);
  
    // Create a new Date object using the parsed values
    const dob = new Date(year, month, day);
  
    // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const dayOfWeekIndex = dob.getDay();
  
    // Return the day of the week based on the index
    return daysOfWeek[dayOfWeekIndex];
  }
  
  module.exports = getDayOfBirth;
  