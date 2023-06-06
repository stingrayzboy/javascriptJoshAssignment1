function getNestedKey(obj, key) {
  const keys = key.split(".");
  let value = obj;
  for (const nestedKey of keys) {
    value = value[nestedKey];
    if (value === undefined) {
      return undefined;
    }
  }
  return value;
}

const obj = {
  name: "Harry Potter",
  age: 12,
  address: {
    details: ["4", "Privet Drive"],
    area: "Little Whinging",
    city: "Surrey",
    state: "England",
  },
};

const result = getNestedKey(obj, "address.details.1");
console.log(result); // Output: "Privet Drive"

function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }

  if (typeof obj1 !== typeof obj2) {
    return false;
  }

  if (typeof obj1 !== "object" || obj1 === null || obj2 === null) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

const obj1 = { a: 1, b: { c: [2, 3] } };
const obj2 = { a: 1, b: { c: [2, 3] } };
console.log(deepEqual(obj1, obj2)); // Output: true

function deepClone(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  const clone = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    clone[key] = deepClone(obj[key]);
  }

  return clone;
}

const original = { a: 1, b: { c: [2, 3] } };
const clone = deepClone(original);
console.log(clone); // Output: { a: 1, b: { c: [2, 3] } }
console.log(clone === original); // Output: false as it is not referenceing the same memory
