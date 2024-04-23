export const utilService = {
  makeId,
  makeLorem,
  getRandomIntInclusive,
  debounce,
  randomPastTime,
  saveToStorage,
  loadFromStorage,
  getAssetSrc,
  formatDate,
  formatSeconds,
};

function makeId(length = 6) {
  var txt = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return txt;
}

function makeLorem(size = 100) {
  var words = [
    "The sky",
    "above",
    "the port",
    "was",
    "the color of television",
    "tuned",
    "to",
    "a dead channel",
    ".",
    "All",
    "this happened",
    "more or less",
    ".",
    "I",
    "had",
    "the story",
    "bit by bit",
    "from various people",
    "and",
    "as generally",
    "happens",
    "in such cases",
    "each time",
    "it",
    "was",
    "a different story",
    ".",
    "It",
    "was",
    "a pleasure",
    "to",
    "burn",
  ];
  var txt = "";
  while (size > 0) {
    size--;
    txt += words[Math.floor(Math.random() * words.length)] + " ";
  }
  return txt;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function randomPastTime() {
  const HOUR = 1000 * 60 * 60;
  const DAY = 1000 * 60 * 60 * 24;
  const WEEK = 1000 * 60 * 60 * 24 * 7;

  const pastTime = getRandomIntInclusive(HOUR, WEEK);
  return Date.now() - pastTime;
}

function debounce(func, timeout = 350) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadFromStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : undefined;
}

// util function
function getAssetSrc(name) {
  const path = `/src/assets/${name}`;
  const modules = import.meta.glob("/src/assets/*", { eager: true });
  const mod = modules[path];
  return mod.default;
}

/**
 * Formats a timestamp into a string with the format "MMM D, YYYY" (e.g., "Apr 5, 2024").
 * @param {number} timestamp - The timestamp to be formatted (in milliseconds since the Unix epoch).
 * @returns {string} A formatted date string.
 */
function formatDate(timestamp) {
  // Array containing short names of months
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // Create a Date object from the provided timestamp
  const date = new Date(timestamp);

  // Extract month, day, and year from the Date object
  const month = months[date.getMonth()]; // Get month name abbreviation
  const day = date.getDate(); // Get day of the month
  const year = date.getFullYear(); // Get full year

  // Format the date string
  return `${month} ${day}, ${year}`;
}

/**
 * Converts seconds to a formatted time string.
 * If hours are zero, returns MM:SS format, otherwise returns HH:MM:SS format.
 * @param {number} seconds - The number of seconds to convert.
 * @returns {string} The formatted time string.
 */
function formatSeconds(seconds) {
  // Calculate hours, minutes, and remaining seconds
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  // If hours are zero, return MM:SS format
  if (hours === 0) {
      const formattedMinutes = minutes < 10 ? `${minutes}` : `${minutes}`;
      const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;
      return `${formattedMinutes}:${formattedSeconds}`;
  }

  // Format each part with leading zero if needed
  const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
  const formattedMinutes = minutes < 10 ? `${minutes}` : `${minutes}`;
  const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;

  // Return the formatted string in HH:MM:SS format
  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
