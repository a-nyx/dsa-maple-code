# Major Types

O(1) = constant
O(logn) = logarithmic
O(n) = linear
O(nlogn) = linearithmic
O(n^2) = quadratic
O(n^3) = cubic
O(2^n) = exponential
O(n!) = factorial

`O(1) < O(logn) < O(n) < O(nlogn) < O(n^2) < O(n^3) < O(2^n) < O(n!)`

![Major complexity types](./img/chart-complexities.png)
_https://www.freecodecamp.org/news/big-o-cheat-sheet-time-complexity-chart/_

## Tips

- O(logn) => see [animation](https://yongdanielliang.github.io/animation/web/BinarySearchNew.html), see `./img/bst.webp`
- O(nlogn) => Best sorting algorithm
- Sometimes, it is a combination of major types

### Nested loops

O(n^2)

```js
for (let i = 0; i < arr.length; i++) {
  for (let k = 0; k < array.length; k++) {
    console.log("haha");
  }
}
```

O((n^2 + n) / 2) => O(n^2)

```js
for (let i = 0; i < arr.length; i++) {
  for (let k = i + 1; k < array.length; k++) {
    console.log("yo!");
  }
}
```

### Question

Can nested loop have linear time complexity?
