let inputList = ["dElhi", "kolKata", "Mubai", "Chennai"];
// Excepted Output
/*let outputList = [
  "Hello DELHI",
  "Hello KOLKATA",
  "Hello MUMBAI",
  "Hello CHENNAI",
];*/

// 1
let output = [];
for (let i = 0; i < inputList.length; i++) {
  let item = inputList[i];
  output[i] = `${item.toUpperCase()}`;
}
console.log(output);

// 2 :: LAMDA/STREAM
// inputList.map(() => {});
let output1 = inputList.map((item) => `${item.toUpperCase()}`);
console.log(output1);
