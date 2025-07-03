// src/utils/helpers.js

/**
 * Formats a given date string into a more readable format (e.g., "Jan 01, 2023").
 * @param {string} dateString - The date string to format.
 * @returns {string} The formatted date string.
 */
export const formatDate = (dateString) => {
  if (!dateString) return '';
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

/**
 * Formats a number as currency (e.g., "$1,234.56").
 * @param {number} amount - The amount to format.
 * @param {string} currency - The currency code (e.g., "USD", "KES").
 * @param {string} locale - The locale string (e.g., "en-US", "sw-KE").
 * @returns {string} The formatted currency string.
 */
export const formatCurrency = (amount, currency = 'KES', locale = 'en-KE') => {
  if (typeof amount !== 'number') return '';
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount);
};

/**
 * Calculates the number of days between two dates.
 * @param {string} startDateString - The start date string.
 * @param {string} endDateString - The end date string.
 * @returns {number} The number of days, or null if dates are invalid.
 */
export const calculateDaysBetweenDates = (startDateString, endDateString) => {
  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);

  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    return null; // Invalid date
  }

  const diffTime = Math.abs(endDate - startDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

/**
 * Generates a unique ID (simple implementation).
 * @returns {string} A unique ID string.
 */
export const generateUniqueId = () => {
  return Math.random().toString(36).substring(2, 9);
};