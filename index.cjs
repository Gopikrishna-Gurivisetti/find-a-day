function getDayOfBirth(dateOfBirth) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
    const [day, month, year] = dateOfBirth.split('-');
    const dob = new Date(year, month - 1, day);
    const dayOfWeekIndex = dob.getDay();
  
    return daysOfWeek[dayOfWeekIndex];
  }
  
  module.exports = getDayOfBirth;