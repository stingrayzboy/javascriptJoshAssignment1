// 1.

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const func = async () => {
  console.log("Printing before");
  await sleep(3000);
  console.log("Printing after");
};

func();

// 2.
const fetchData = () => {
  fetch("https://reqres.in/api/users")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

fetchData();

// 3.

const testAsyncFunction = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Test Resolve");
    } else {
      reject("Test Reject");
    }
  }).catch((err) => {
    console.log("Error caught in testAsyncFunction: ", err);
  });
};
testAsyncFunction()
  .then((res) => {
    console.log("Response in then block: ", res);
  })
  .catch((err) => console.log("Error in catch block: ", err));

// 4.
const test2AsyncFunction = () => {
  return Promise.reject("Test static reject");
};
test2AsyncFunction()
  .then((res) => {
    console.log("Response in then block", res);
  })
  .catch((err) => console.log("Error in catch block", err));

// 5.
const test3AsyncFunction = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Test Resolve");
    } else {
      reject("Test Reject");
    }
  }).catch((err) => {
    console.log("Error caught in testAsyncFunction", err);
    throw new Error("Forced error");
  });
};
test3AsyncFunction()
  .then((res) => {
    console.log("Response in then block: ", res);
  })
  .catch((err) => console.log("Error in catch block: ", err));

// 6.
const fetchDataWithDelay = () => {
  return new Promise((resolve, reject) => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((data) => setTimeout(() => resolve(data), 2000))
      .catch((error) => reject(error));
  });
};

fetchDataWithDelay()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// 7.
const fetchDataWithAsyncDelay = async () => {
  try {
    const response = await fetch("https://reqres.in/api/users");
    const data = await response.json();
    await sleep(2000);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

fetchDataWithDelay()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
