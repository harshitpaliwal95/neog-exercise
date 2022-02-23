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
const willthanosKill = (nam, killHim, notKill) => {
  if (nam.length % 2) {
    killHim(nam);
  }
  notKill(nam);
};
const killHim = (nam) => console.log(`kill ${nam}`);
const notKill = (nam) => console.log(`do not kill ${nam}`);

willthanosKill("harshit", killHim, notKill);
