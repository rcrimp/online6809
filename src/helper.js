import winston from 'winston';
import 'setimmediate';

function parseOperand(str) {
  const c = str[0]; // $ for hex, % for binary, otherwise decimal
  let number = NaN;
  switch (c) {
    case '$':
      number = parseInt(str.substring(1), 16);
      break;
    case '%':
      number = parseInt(str.substring(1), 2);
      break;
    default:
      number = parseInt(str);
      break;
  }
  if (isNaN(number)) {
    console.log('Invalid operand: ' + str);
    return 0;
  }
  return number;

}

/**
 * Convert decimal to hexadecimal.
 *
 * @param {number} n number to convert
 * @param {number} l bit length of result
 * @return {string}
 */
function inHex(n, l = 8) {
  let s = n.toString(16).toUpperCase();
  while (s.length < l) {
    s = '0' + s;
  }
  return s;
}

/**
 * Convert decimal to signed hexadecimal.
 *
 * @param {number} n number to convert
 * @param {number} bits bit length of result
 * @param {string} symbol symbol prefix
 * @return {string}
 */
function signedHex(n, bits, symbol) {
  const digits = (bits > 8) ? 4 : 2;
  if ((n & (1 << (bits - 1))) !== 0) {
    return '-' + symbol + inHex((1 << bits) - n, digits);
  } else {
    return symbol + inHex(n, digits);
  }
}

const tracing = 0;

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: {service: 'online6809assembler'},
  transports: [
    new winston.transports.Console(),
  ],
});

/**
 * Create an info level log entry.
 *
 * @param {string} caption log message
 * @param {Object} data object data to log
 * @param {boolean} force override logging flag
 */
function trc(caption, data, force= false) {
  if ((tracing !== 0) || (force)) {
    logger.info(caption + ' : ' + data);
  }
}

/**
 * Pluralise a word if needed.
 *
 * @param {string} word
 * @param {number} n
 * @param {string} wordPlural
 * @return {string}
 */
function plural(word, n, wordPlural) {
  if (n === 1) {
    return word;
  } else {
    if (wordPlural) {
      return (wordPlural);
    } else {
      return word + 's';
    }
  }
}

export {inHex, signedHex, trc, plural, parseOperand};
