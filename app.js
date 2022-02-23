// async js practice
// name of lengthn

// const strLength = (nam, printName) => {
//   const ln = nam.length;
//   printName(ln);
// };

// const printName = (length) => console.log(`ohhh! your Name Length ${length}`);

// strLength("harshit", printName);

//
// willthanos kill me or nam
//
// const willthanosKill = (nam, killHim, notKill) => {
//   if (nam.length % 2) {
//     killHim(nam);
//   }
//   notKill(nam);
// };
// const killHim = (nam) => console.log(`kill ${nam}`);
// const notKill = (nam) => console.log(`do not kill ${nam}`);

// willthanosKill("h", killHim, notKill);

// function for setTime out
// const print = (msg, delay) => {
//   setTimeout(() => console.log(msg), delay * 1000);
// };

// print("hello dear", 2);

// function for setINterval

// const pritn = (msg, delay) => {
//   setInterval(() => console.log(msg), delay * 1000);
// };

// pritn("hello", 0.5);

// Write a function that takes a number. Then print a countdown from that number to 0. At zero print "Bang Bang!"

// const pritn = (n) => {
//   let timeid = setInterval(() => {
//     console.log(n);
//     n--;
//     if (n === 0) {
//       console.log("bang bang");
//       clearInterval(timeid);
//     }
//   }, 1000);
// };

// pritn(5);

// own promise

// let fakeFetch = (msg, shouldReject) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (shouldReject) {
//         rej(`error from server: ${msg}`);
//       }
//       res(`from server: ${msg}`);
//     }, 1000);
//   });
// };
// fakeFetch("hello dear").then((data) => console.log(data));

// api for get length

// const fakeFetch = (msg, shouldReject) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldReject) {
//         reject(`error from server ${msg}`);
//       }
//       resolve(msg.length);
//     }, 1000);
//   });
// };

// const getLength = (msg) => {
//   fakeFetch("hello").then((data) => console.log(`the length is ${data}`));
// };
// getLength("hello");

// water fall
// const fakeFatch = (msg, shouldReject) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (shouldReject) {
//         rej("error form server");
//       }
//       res(`succes: ${msg}`);
//     }, 1000);
//   });
// };
// // water fall with promise

// const syncApi = (msg1, msg2) => {
//   fakeFatch(msg1).then((msgdata1) =>
//     fakeFatch(msg2).then((msgdata2) => {
//       console.log(msgdata1);
//       console.log(msgdata2);
//     })
//   );
// };
// syncApi("hello", "harshit");

const fakeFetch = (msg, shouldReject) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (shouldReject) {
        rej(`error from server`);
      }
      res(`done ${msg}`);
    }, 1000);
  });
};

// const getdata = async (msg1, msg2) => {
//   try {
//     let data1 = await fakeFetch(msg1);
//     let data2 = await fakeFetch(msg2);
//     console.log(data1);
//     console.log(data2);
//   } catch (err) {
//     console.log(err);
//   }
// };
// getdata("hello", "bye");

const getData = async (msg) => {
  try {
    let data = await fakeFetch(msg);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
getData("hello");
