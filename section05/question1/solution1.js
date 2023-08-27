const ONES = [
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
];
const TENS = [
  "Twenty",
  "Thirty",
  "Forty",
  "Fifty",
  "Sixty",
  "Seventy",
  "Eighty",
  "Ninety",
];
const TENPLUS = [
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen",
];
const ZERO = "Zero";
const BILLION = "Billion";
const MILLION = "Million";
const THOUSAND = "Thousand";
const HUNDRED = "Hundred";

const numberToWords = (num) => {
  if (num === 0) return ZERO;
  let words = [];

  const billions = Math.floor(num / 1_000_000_000);
  if (billions > 0) {
    words.push(write999(billions), BILLION);
    num %= 1_000_000_000;
  }

  const millions = Math.floor(num / 1_000_000);
  if (millions > 0) {
    words.push(write999(millions), MILLION);
    num %= 1_000_000;
  }

  const thousands = Math.floor(num / 1_000);
  if (thousands > 0) {
    words.push(write999(thousands), THOUSAND);
    num %= 1_000;
  }

  if (num > 0) {
    words.push(write999(num));
  }

  return words.join(" ");
};

const write999 = (num) => {
  let words = [];

  const hundreds = Math.floor(num / 100);
  if (hundreds > 0) {
    words.push(ONES[hundreds - 1], HUNDRED);
    num = num % 100;
  }

  if (num >= 10 && num < 20) {
    words.push(TENPLUS[num - 10]);
    return words.join(" ");
  }

  const tens = Math.floor(num / 10);
  if (tens > 0) {
    words.push(TENS[tens - 2]);
    num = num % 10;
  }

  if (num > 0) {
    words.push(ONES[num - 1]);
  }

  return words.join(" ");
};

// Time Complexity: O(n) where n is length
// Space Complexity: O(1)
