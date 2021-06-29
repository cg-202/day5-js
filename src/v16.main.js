let inputList = ["dElhi", "kolKata", "Mumbai", "Chennai"];
// Excepted Output
let outputList = [
  `<h1>DELHI</h1>`,
  `<h1>Kolkata</h1>`,
  `<h1>Mumbai</h1>`,
  `<h1>Chennai</h1>`,
];

// 1
let output = [];
for (let i = 0; i < inputList.length; i++) {
  let item = inputList[i];
  output[i] = `<h1>${item.toUpperCase()}</h1>`;
}
console.log(output);

// 2 :: LAMDA/STREAM
let output1 = inputList.map((item) => `<h1>${item}</h1>`);
console.log(output1);

// for react
let output2 = inputList.map((item, index) => `<h1 key=${index}>${item}</h1>`);
