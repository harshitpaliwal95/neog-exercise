// functional programing

// const arr = ["black", "green", "blue", "orenge", "sky blue", "kk", "bb"];

// const result = arr.filter((arr) => arr.length < 5);
// console.log(result);
// // console.log(arr);

// const obj = {
//   name: "harshit",
//   age: 22,
// };
// const birthday = (persion) => ({ ...persion, age: persion.age + 1 });
// // console.log(obj);
// const newAge = birthday(obj);

// console.log(newAge);

const arr = [1, 5, 9, 11, 44, 66, 3, 7, 44, 6, 8];

const moreThan10 = (num) => num > 10;

const increaseByTwo = (num) => num + 2;

arr.map(increaseByTwo);

arr.filter(lessThan10);
// console.log(arr);
