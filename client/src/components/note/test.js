// const arr = [1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1];

// console.log(arr)
// let start = 0;
// let end = arr.length - 1;

// while (start < end) {
//   if (arr[start] === 0) {
//     start++;
//   } else if (arr[end] === 1) {
//     end--;
//   } else {
//     // Swap arr[start] and arr[end]
//     [arr[start], arr[end]] = [arr[end], arr[start]];
//     start++;
//     end--;
//   }
// }
//   console.log(arr)

// shift by 1
let arr = [1, 2, 3, 4, 5, 6];

const firstkElements = [];

const k = 3
console.log(arr.length - k)
for (let i = arr.length - 1; i > arr.length - 1-  k; i--) {
  firstkElements.unshift(arr[i]);
}

for (let i = arr.length - 1; i > 0 ; i--) {
  arr[i] = arr[i - k];
}
//  arr[0] = lastElement
console.log(firstkElements);
for (let i = 0; i < k; i++) {
    arr[i] = firstkElements[i]
}
console.log(arr);
