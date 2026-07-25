# Array Functions Research

This file contains commonly used JavaScript array functions with a short description, one example, and the expected output.

| Function | Description | Example | Output |
|---|---|---|---|
| push() | Adds one or more elements to the end of an array. | `const arr = [1, 2]; arr.push(3);` | `[1, 2, 3]` |
| pop() | Removes the last element from an array. | `const arr = [1, 2, 3]; arr.pop();` | `[1, 2]` |
| shift() | Removes the first element from an array. | `const arr = [1, 2, 3]; arr.shift();` | `[2, 3]` |
| unshift() | Adds one or more elements to the beginning of an array. | `const arr = [2, 3]; arr.unshift(1);` | `[1, 2, 3]` |
| map() | Creates a new array by applying a function to each element. | `const arr = [1, 2, 3]; arr.map(x => x * 2);` | `[2, 4, 6]` |
| filter() | Creates a new array with elements that pass a condition. | `const arr = [1, 2, 3, 4]; arr.filter(x => x > 2);` | `[3, 4]` |
| reduce() | Reduces an array to a single value by repeatedly applying a function. | `const arr = [1, 2, 3]; arr.reduce((a, b) => a + b, 0);` | `6` |
| find() | Returns the first element that satisfies a condition. | `const arr = [10, 20, 30]; arr.find(x => x > 15);` | `20` |
| includes() | Checks whether an array contains a specific value. | `const arr = [10, 20, 30]; arr.includes(20);` | `true` |
| sort() | Sorts the elements of an array. | `const arr = [30, 10, 20]; arr.sort();` | `[10, 20, 30]` |
| reverse() | Reverses the order of elements in an array. | `const arr = [1, 2, 3]; arr.reverse();` | `[3, 2, 1]` |
| slice() | Returns a copy of a portion of an array. | `const arr = [1, 2, 3, 4]; arr.slice(1, 3);` | `[2, 3]` |
| splice() | Adds or removes elements from an array. | `const arr = [1, 2, 3, 4]; arr.splice(1, 2);` | `[2, 3]` |
| concat() | Merges two or more arrays. | `const a = [1, 2]; const b = [3, 4]; a.concat(b);` | `[1, 2, 3, 4]` |
| join() | Converts array elements into a string. | `const arr = ['a', 'b', 'c']; arr.join('-');` | `'a-b-c'` |
| forEach() | Executes a function for each array element. | `const arr = [1, 2, 3]; arr.forEach(x => console.log(x));` | `1 2 3` |
| every() | Checks if all elements satisfy a condition. | `const arr = [2, 4, 6]; arr.every(x => x % 2 === 0);` | `true` |
| some() | Checks if at least one element satisfies a condition. | `const arr = [1, 3, 5]; arr.some(x => x % 2 === 0);` | `false` |
| flat() | Flattens nested arrays into a single array. | `const arr = [1, [2, [3]]]; arr.flat(2);` | `[1, 2, 3]` |
| flatMap() | Maps each element and then flattens the result. | `const arr = [1, 2, 3]; arr.flatMap(x => [x, x * 2]);` | `[1, 2, 2, 4, 3, 6]` |
| indexOf() | Returns the first index of a value, or -1 if not found. | `const arr = [10, 20, 30]; arr.indexOf(20);` | `1` |
| lastIndexOf() | Returns the last index of a value, or -1 if not found. | `const arr = [10, 20, 30, 20]; arr.lastIndexOf(20);` | `3` |
| findIndex() | Returns the index of the first element that satisfies a condition. | `const arr = [10, 20, 30]; arr.findIndex(x => x > 15);` | `1` |
