import winston from 'winston';
import 'setimmediate';

/**
 * Parses the given string (operand) in hex, binary, or decimal.
 * Hex values starts with '$', binary start with '%', decimal number otherwise.
 *
 * @param {string} str Operand string to parse
 * @return {number} The parsed number, or 0 if the input is not a valid number format
 */

function parseOperand(str) {
  str = str.trim().replace(/^[\s,:]+|[\s,:]+$/g, '');

  const rHex = /^\$[0-9A-Fa-f]+/ // $0F
  const rDec = /^[0-9]+/ // 15
  const rBin = /^%[01]+/ // %1111

  if (rHex.test(str)) {
    return parseInt(str.substring(1), 16);
  } else if (rBin.test(str)) {
    return parseInt(str.substring(1), 2);
  } else if (rDec.test(str)) {
    return parseInt(str);
  }

  console.error('Unable to parse operand: ' + str);
  return 0;
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
