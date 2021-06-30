// Array Destructring.
let cityList = [
  "delhi",
  "mumbai",
  "kolkata",
  "chennai",
  "kochi",
  "kerala",
  "bhopal",
];

// first three cities
let city1 = cityList[0];
let city2 = cityList[1];
let city3 = cityList[2];
let city4 = cityList[3];
let city5 = cityList[4];

// writ the is one line :: using new approach
let [city11, city21] = cityList;
console.log(city11, city21);
