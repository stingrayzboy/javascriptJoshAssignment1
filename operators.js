/*
The preincrement and post increment operators have the same end result
but the different implementation. THe pre increment is responsible for
increment first then running functions, whereas Post executes function
then increments.
*/

let i = 0;

console.log(++i); // prints 1
console.log("#########OPERATORS##########");
console.log(i); // prints 1

console.log(i++); // prints 1
console.log(i); // prints 2

let str = "Hello";

console.log(str[1]); // prints e
console.log(str[10]); // prints undefined

let obj = {
  a: [1, 2, 3],
  b: { z: 12, f: [1, 4, 2] },
  c: { d: null, x: undefined },
};

jsonString = JSON.stringify(obj);
console.log(jsonString); // prints '{"a":[1,2,3],"b":{"z":12,"f":[1,4,2]},"c":{"d":null}}'
/*
JSON.Stringify is able to convert every datatype into the corresponding
JSONs however undefined is a peculiar case as it means like the name suggests
its not defined hence JSON.stringify simply ignores it. 
in Our case the key x was undefined hence was skipped in the final output.
*/

let kut = "[1,2,3,ab]";
let gut = JSON.parse(kut);

console.log(gut);

console.log(obj);
/*
Here we see that after we try to parse a invalid JSON
the code breaks and the execution stops
*/
