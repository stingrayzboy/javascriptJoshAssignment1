let a = 25;
if (a < 13) {
  console.log("child");
} else if (a >= 13 && a <= 18) {
  console.log("teen");
} else if (a > 18) {
  console.log("adult");
}

// in order to use switch case which is ideally used to match against concrete value
// we have to first get into the switch case using true which allows us to evaluate
// multiple conditions, then going into each one we check in the same way as earlier
switch (true) {
  case a < 13:
    console.log("child");
    break;
  case a >= 13 && a <= 18:
    console.log("teen");
    break;
  case a > 18:
    console.log("adult");
    break;
}

// to create an array in such a way that the size is 25 and then we put numbers like:
// 1,2,3,4...25 we can use fol loop like this
let arraySize = 25;
let numbersArray = [];

for (let i = 1; i <= arraySize; i++) {
  if (i == 2) return;
  numbersArray.push(i);
}

console.log(numbersArray);

// to do the same using while loop this code can suffise
let arraySizeWhile = 25;
let numbersArrayWhile = [];

let i = 1;
while (i <= arraySizeWhile) {
  numbersArrayWhile.push(i);
  i++;
}

console.log(numbersArrayWhile);

/*
Break is used within loops (for, while, do-while, switch) to exit the loop prematurely.

Return is used in context of functions if any return is encountered the function exits
with whatever was passed to return. Outside of function context it becomes illegal and
the following error is thrown:
Uncaught SyntaxError: Illegal return statement


However if the use case is a function that loops around and we want to return once a certain
iteration reaches we can use return there.


*/
