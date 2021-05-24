/* eslint-disable */
const RGB_HEX = /^#?(?:([\da-f]{3})[\da-f]?|([\da-f]{6})(?:[\da-f]{2})?)$/i;

export const hex2RGB = str => {
  const [ , short, long ] = String(str).match(RGB_HEX) || [];

  if (long) {
    const value = Number.parseInt(long, 16);
    return [ value >> 16, value >> 8 & 0xFF, value & 0xFF ];
  } else if (short) {
    return Array.from(short, s => Number.parseInt(s, 16)).map(n => (n << 4) | n);
  }
};