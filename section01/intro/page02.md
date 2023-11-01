# Arrays, Sets, Objects, Maps

- collections of multiple items under a single variable name
- performing common operations of its kind
- not primitive types
  - see: pass-by-value vs pass-by-reference
  - see: shallow copies
  - see: defining with const
- comparisons
  - data format
  - CRUD: create, read, update, delete
    - create, insert: where: beginning, end, index
    - read, retrieve: peek (by index), search (by value), lookup (by key)
    - update, mutate
    - delete, remove
    - sorting, organizing
  - complexities
    - memory: how much space needed
    - time: how much time needed
      - read: find, search, lookup
      - write: add, insert

<br/>
<br/>

## Arrays

- a special type of objects
- numbered indexes: use numbers to access its elements
- ordered, sortable
- allow duplicates

:star2: Operation Costs

- push(), pop(), reading & updating by index: O(1) = constant
- splice(), indexOf(): O(n) = linear

Read More:
[JavaScript Arrays on W3Schools](https://www.w3schools.com/js/js_arrays.asp)
[Array on MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
[JavaScript Array Methods on W3Schools](https://www.w3schools.com/js/js_array_methods.asp)
[Time complexity for Javascript Array methods on DEV](https://dev.to/lukocastillo/time-complexity-big-0-for-javascript-array-methods-and-examples-mlg)

<br/>
<br/>

## Sets, HashSets

- unique elements = no duplicates
- keeps the insertion order, iterable
- no keys, no indexes

:star2: Operation Costs

- add(), delete(), has(): O(1) = constant
- great for retrieving

Read More:
[JavaScript Sets on W3Schools](https://www.w3schools.com/js/js_object_sets.asp)
[Set on MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

<br/>
<br/>

## Objects, Maps, HashMaps

- key-value pairs
- named indexes: use names to access its elements
- unique keys
- [Objects vs Maps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#objects_vs._maps)
  - Key order
    - Maps keep the insertion order
    - Object keys are ordered with some rules, not in insertion order
  - Getting size
    - myMap.size
    - Object.keys(myObj).length
  - iteration: Map is directly iterable

:star2: Operation Costs

- similar to Sets

Read More:
[JavaScript Objects on W3Schools](https://www.w3schools.com/js/js_objects.asp)
[Object on MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

[JavaScript Maps on W3Schools](https://www.w3schools.com/js/js_object_maps.asp)
[Map on MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
