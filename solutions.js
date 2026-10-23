// 01
var solveMeFirst = function(a, b) {
  return a + b;
};

// 02
var multiply = function(a, b) {
  return a * b;
};

// 03
var evenOrOdd = function(number) {
  return number % 2 === 0 ? "Even" : "Odd";
};

// 04
var makeNegative = function(number) {
  return -Math.abs(number);
};

// 05
var opposite = function(number) {
  return -number;
};

// 06
var simpleArraySum = function(ar) {
  return ar.reduce((s, x) => s + x, 0);
};

// 07
var sleepIn = function(weekday, vacation) {
  return !weekday || vacation;
};

// 08
var monkeyTrouble = function(aSmile, bSmile) {
  return aSmile === bSmile;
};

// 09
var sumDouble = function(a, b) {
  return a === b ? (a + b) * 2 : a + b;
};

// 10
var diff21 = function(n) {
  return n > 21 ? (n - 21) * 2 : 21 - n;
};

// 11
var parrotTrouble = function(talking, hour) {
  return talking && (hour < 7 || hour > 20);
};

// 12
var makes10 = function(a, b) {
  return a === 10 || b === 10 || a + b === 10;
};

// 13
var nearHundred = function(n) {
  return Math.abs(100 - n) <= 10 || Math.abs(200 - n) <= 10;
};

// 14
var posNeg = function(a, b, negative) {
  if (negative) return a < 0 && b < 0;
  return (a < 0 && b > 0) || (a > 0 && b < 0);
};

// 15
var notString = function(str) {
  return str.startsWith("not") ? str : "not " + str;
};

// 16
var compareTriplets = function(a, b) {
  let r = [0, 0];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) r[0]++;
    else if (a[i] < b[i]) r[1]++;
  }
  return r;
};

// 17
var aVeryBigSum = function(ar) {
  return ar.reduce((s, x) => s + x, 0);
};

// 18
var staircase = function(n) {
  let rows = [];
  for (let i = 1; i <= n; i++) rows.push(" ".repeat(n - i) + "#".repeat(i));
  return rows.join("\n");
};

// 19
var gradingStudents = function(grades) {
  return grades.map(g => {
    if (g < 38) return g;
    const next = Math.ceil(g / 5) * 5;
    return next - g < 3 ? next : g;
  });
};

// 20
var timeConversion = function(s) {
  const pm = s.slice(-2) === "PM";
  let [h, m, sec] = s.slice(0, -2).split(":");
  h = parseInt(h, 10) % 12;
  if (pm) h += 12;
  return String(h).padStart(2, "0") + ":" + m + ":" + sec;
};

// 21
var repeatStr = function(n, s) {
  return s.repeat(n);
};

// 22
var solution = function(str) {
  return str.split("").reverse().join("");
};

// 23
var positiveSum = function(arr) {
  return arr.filter(x => x > 0).reduce((s, x) => s + x, 0);
};

// 24
var summation = function(num) {
  return (num * (num + 1)) / 2;
};

// 25
var booleanToString = function(b) {
  return String(b);
};
