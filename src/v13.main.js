// FOR LOOP IN THE CONTEXT OF ARRAYS
let list = ["DELHI", "KOLKATA", "MUMBAI", "CHENNAI"];

// 1
console.log("=========================================");
for (let i = 0; i < list.length; i++) {
  let item = list[i];
  console.log(item);
}

// 2 :: FOR EACH :: Advance For loop
console.log("=========================================");
for (let item of list) {
  console.log(item);
}

// 3 :: forEach :: like stream and lamda in java
// Callback Functions
console.log("=========================================");
list.forEach((item) => console.log(item));
