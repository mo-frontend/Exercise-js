// Basic function

function add(nam1, nam2) {
  return nam1 + nam2;
}
console.log(add(3, 4)); // 7
console.log(add(6, 9)); // 15
console.log(add(9, 4)); // 13
console.log(add(2, 4)); // 6
console.log(add(310, 4)); // 314

// Experssions function

const sum = function (nam1, nam2) {
  return nam1 + nam2;
};
console.log(sum(5, 9)); // 14
console.log(sum(511, 9)); // 520
console.log(sum(5, 99)); //  104
console.log(sum(7, 966)); // 973

// Arrow functions

const sums = (oje1, oje2) => {
  return oje1 * oje2;
};
console.log(sums(44, 5)); // 220
console.log(sums(4, 15)); // 60
console.log(sums(34, 5)); // 170
console.log(sums(99, 5)); // 495
console.log(sums(66, 5)); // 330
