# Examples

## O(n) - linear time

```js
const indexOf = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

const targetIndex = indexOf([3, 19, 5, 1, 9, 11, 13, 21, 2], 9);
console.log(targetIndex);
```

## O(n) - linear time #2

```js
const increaseAndMultiply = (arr, plus, times) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += plus;
    arr[i] *= times;
  }
};

const oneCoolArray = [3, 19, 5, 1, 9, 11, 13, 21, 2];
increaseAndMultiply(oneCoolArray, 5, 10);
console.log(oneCoolArray);
```

## O(n) - linear time #3

```js
const increaseAll = (arr, plus) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += plus;
  }
};

const multiplyAll = (arr, times) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= times;
  }
};

const increaseAndMultiply = (arr, plus, times) => {
  increaseAll(arr, plus);
  multiplyAll(arr, times);
};

const oneCoolArray = [3, 19, 5, 1, 9, 11, 13, 21, 2];
increaseAndMultiply(oneCoolArray, 5, 10);
console.log(oneCoolArray);
```

if one of them was O(n^2), we'd ignore O(n)

## O(1) - constant time

```js
const getMidElement = (arr) => {
  let midIndex = Math.round((arr.length - 1) / 2);
  return arr[midIndex];
};

const oneCoolArray = [3, 19, 5, 1, 9, 11, 13, 21, 2];
const midElement = getMidElement(oneCoolArray);
console.log(midElement);
```

## O(n^2) - quadratic time

```js
const containsDuplicate = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let k = i + 1; k < nums.length; k++) {
      if (nums[i] === nums[k]) {
        return true;
      }
    }
  }

  return false;
};

const oneCoolArray = [3, 19, 5, 1, 9, 11, 13, 21, 2, 11];
const hasDuplicate = containsDuplicate(oneCoolArray);
console.log(hasDuplicate);
```

## O(n^3) - cubic time

```js
const printTriplets = (nums, sum) => {
  for (let i = 0; i < nums.length; i++) {
    for (let k = i + 1; k < nums.length; k++) {
      for (let t = k + 1; t < nums.length; t++) {
        if (nums[i] + nums[k] + nums[t] == sum) {
          console.log(`${nums[i]} + ${nums[k]} + ${nums[t]} = ${sum}`);
        }
      }
    }
  }
};

const oneCoolArray = [10, 5, 20, 30, 15, 5, 25, 35, 10];
printTriplets(oneCoolArray, 40);
```
