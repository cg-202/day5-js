// ASSIGNING DEFAULT VALUE TO PARAMS
function sum(n1 = 0, n2 = 0) {
  return n1 + n2;
}

// without any params
let output = sum();
console.log(output);

// with one param
let output1 = sum(10);
console.log(output1);

// with two param
let output2 = sum(20, 50);
console.log(output2);

// with three param AS WELL
let output3 = sum(30, 60, 70);
console.log(output3);
