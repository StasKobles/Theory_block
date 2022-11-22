const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 16, 17, 18, 19, 11]; //Find first occurrence in array

const linearSearch = (array, item) => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    count++;
    if (array[i] === item) {
      return [i, count]; //[index of ITEM,count of iteration]
    }
  }
  return [null, count];
};

console.log(linearSearch(array, 5));
