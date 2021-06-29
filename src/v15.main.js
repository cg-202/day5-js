let inputList = ["dElhi", "kolKata", "Mumbai", "Chennai"];
// Excepted Output
// let outputList = [5, 7, 6, 7];

// 1
let output = [];
for (let i = 0; i < inputList.length; i++) {
  let item = inputList[i];
  output[i] = item.length;
}
console.log(output);

// 2 :: LAMDA/STREAM
let output1 = inputList.map((item) => item.length);
console.log(output1);
