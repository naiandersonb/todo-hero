/**
 * 
 * @param {Date} d1 - The first Date object to compare.
 * @param {Date} d2 - The second Date object to compare.
 * @returns - Returns true if the dates are the same, false otherwise.
 */
export function compareDates(d1, d2) {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth()
  );
}
