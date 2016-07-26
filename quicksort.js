 /*unsorted = [2,45,74,89,4,88,3,5,1,2];

const quickSort = function(array) {
  if (array.length <= 1) return array;

  const left  = [];
  const right = [];
  const pivot = array[array.length-1];

  for (let i = 0; i < array.length-1; i++) {
    let current = array[i];
    let targetArray = (current < pivot) ? left : right;
    target.push(current);
  }

return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(unsorted));*/

 unsorted = [2,45,74,89,4,88,3,5,1,2];

const quickSort = function(array) {
  if (array.length <= 1) return array;

  const left  = [];
  const right = [];
  const pivot = array[array.length-1];

  for (let i = 0; i < array.length-1; i++) {
    let current = array[i];
    let targetArray = (current < pivot) ? left : right;
    target.push(current);
  }

return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(unsorted));
