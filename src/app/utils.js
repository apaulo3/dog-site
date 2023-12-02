export function getGender(genderBool) {
  if (genderBool) {
    return "m"
  } else {
    return "f"
  }
}

export function getAgeInWeeks(dateString) {
  // Parse the input date string
  const parts = dateString.split("-");
  // Month is 0-based
  const inputDate = new Date(parts[2], parts[0] - 1, parts[1]);

  // Calculate the time difference in milliseconds
  const timeDifference = Date.now() - inputDate.getTime();

  // Calculate the number of weeks
  const weeksSince = Math.floor(
    timeDifference / (
      7 /*days*/ *
      24 /*hrs*/ *
      60 /*mins*/ *
      60 /*s*/ *
      1000 /*ms*/
    )
  );

  return weeksSince
}