const arr = require("./dataForSort");
let count = 0;
//Quicksort is a divide-and-conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.
function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let pivatIndex = Math.floor(array.length / 2);
  let pivat = array[pivatIndex];
  let less = [];
  let more = [];
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (i === pivatIndex) {
      continue;
    }
    if (array[i] < pivat) {
      less.push(array[i]);
    } else {
      more.push(array[i]);
    }
  }
  return [...quickSort(less), pivat, ...quickSort(more)];
}

console.log(quickSort(arr), count);
