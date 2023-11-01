# Strings

definition:
"a string is an array of characters" in some other languages // that's why they are together "arrays and string"
VS
"A JavaScript string is zero or more characters written inside quotes" (no char type)

```js
let string1 = "abc";
let string2 = "abc";
let string3 = `abc`; // See "template literals" and "tagged templates"

let string4 = 'ab"cd"e';
let string5 = 'ab"c"de';
let string6 = "ab\\c\\de";
let string7 = "abc\nde";

let stringLength1 = string1.length; // length is a prop
```

## Primitive values vs Objects

JavaScript strings are normally primitive values. We can define strings as objects like

```js
let string8 = new String("xyz"); // not recommended. complicated & slow.
```

## Comparisons

Comparing objects always returns false.

```js
let a = new String("Maple Code");
let b = new String("Maple Code");
let c = "Maple Code";

console.log("==", a == b); // false
console.log("===", a === b); // false

console.log("==", a == c); // true
console.log("===", a === c); // false
```

Recommended way to compare

```js
console.log(string1.localeCompare(string2));
```
