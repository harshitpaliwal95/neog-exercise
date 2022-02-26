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

// const arr = [1, 5, 9, 11, 44, 66, 3, 7, 44, 6, 8];

// const moreThan10 = (num) => num > 10;

// const increaseByTwo = (num) => num + 2;

// arr.map(increaseByTwo);

// arr.filter(lessThan10);
// console.log(arr);

// const arr = [1, 5, 9, 11, 44, 66, 3, 7, 44, 6, 8];

// const oddSum = (sum, num) => (sum % 2 === 0 ? sum : sum + num);
// console.log(oddSum());

// const arr = [1, 5, 9, 11, 44, 66, 3, 7, 44, 6, 8];

// const oddEven = (odd, num) => {
//   num % 2 === 0
//     ? { ...obj, even: odd.even + num }
//     : { ...obj, odd: odd.odd + num };
// };

// const obj = {
//   odd: 0,
//   even: 0,
// };
// console.log(arr.reduce(oddEven, obj));

// const arr = [1, 5, 9, 11, 44, 66, 3, 7, 44, 6, 8];
// // (previousvalue ,curruntValue)
// const sumOdd = (num, sum) => {
//   if (num % 2 == 0) {
//     sum = sum + num;
//   }
// };
// wrong wrong
// console.log(arr.reduce(sumOdd));

// const arr = [1, 2, 3, 4, 5, 6];
// // const arr = [1, 1];

// // const arr = [1, 5, 9, 11, 44, 66, 3, 7, 44, 6, 8];

// const addOdd = (acc, cur) => (cur % 2 ? acc + cur : acc);
// const addEven = (acc, curr) => (curr % 2 === 0 ? acc + curr : acc);

// console.log(`sum of odd ${arr.reduce(addOdd, 0)}`);
// console.log(`sum of even ${arr.reduce(addEven, 0)}`);

// const arr = [9, 11, 44, 66, 7, 44, 6, 8, 100];

// const MaxNum = (acc, cur) => (cur > acc ? (acc = cur) : acc);

// console.log(arr.reduce(MaxNum));

// const minNum = (acc, cur) => (cur < acc ? (acc = cur) : acc);
// console.log(arr.reduce(minNum));
