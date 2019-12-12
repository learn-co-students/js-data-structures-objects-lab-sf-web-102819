// Write your solution in this file!
const driver = {};
// got the code from the readMe
updateDriverWithKeyAndValue = (obj, key, value) => {
  return Object.assign({}, obj, { [key]: value });
}
const newDriver = { name: "Air" }
// i think you can't use arrow functions
// i've tried with arrow function and it didn't work
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
};

function deleteFromDriverByKey(driver, key) {
  const newDriver = Object({}, driver);
  delete newDriver[key];
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}