/*
  We have an array of objects A and an array of indexes B.
  Reorder objects in array A with given indexes in array B. Do not change array A's length.

  example:


  var A = [C, D, E, F, G];
  var B = [3, 0, 4, 1, 2];

  sort(A, B);
  // A is now [D, F, G, C, E];
*/


let sort = function (a, b) {
  var swapped,
    len = a.length;
  if(b.length === len) {
    return;
  }
  do {
      swapped = false;
      for (let i = 0; i < len - 1; i += 1) {
          if (a[i] > a[i + 1]) {
              let temp = a[i];
              a[i] = a[i + 1];
              a[i + 1] = temp;
              temp = b[i];
              b[i] = b[i + 1];
              b[i + 1] = temp;
              swapped = true;
          }
      }
  } while (swapped);
  return b;
};


console.log(sort([3, 0, 4, 1, 2], ['C', 'D', 'E', 'F', 'G']));
