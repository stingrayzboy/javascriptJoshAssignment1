const originalObject = {
  name: "Harry Potter",
  age: 12,
  address: {
    details: ["4", "Privet Drive"],
    area: "Little Whinging",
    city: "Surrey",
    state: "England",
  },
};

// Create a new copy of the object with updated address.details[0]
const updatedObject = {
  ...originalObject, // Shallow copy of the original object
  address: {
    ...originalObject.address, // Shallow copy of the original address object
    details: ["5", ...originalObject.address.details.slice(1)], // Update the first element of details
  },
};

console.log(updatedObject);

const filterObject = (obj) => {
  const filterNotObject = (arr) => {
    return typeof arr[1] !== "object";
  };
  let entries = Object.entries(obj);

  let shorlisted = entries.filter(filterNotObject);
  return Object.fromEntries(shorlisted);
};

let obj = {
  a: "Apple",
  b: ["Basketball", "Baseball"],
  c: {
    call: "cellphone",
  },
  d: "Dog",
};
console.table(filterObject(obj)); //This should return {a:"Apple", d:"Dog"}
