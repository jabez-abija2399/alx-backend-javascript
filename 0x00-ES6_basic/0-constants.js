/**
 * Returns a string indicating the preference for using const.
 * @returns {string} The preference statement.
 */
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

/**
 * Returns a string indicating that sometimes let is necessary.
 * @returns {string} The combination of let and a statement indicating it's okay.
 */
export function getLast() {
  return ' is okay';
}

/**
 * Combines the statement about let with the message from getLast().
 * @returns {string} The combined message.
 */
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
