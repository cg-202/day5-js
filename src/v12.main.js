let list = ["DELHI", "KOLKATA", "MUMBAI", "CHENNAI"];

// ACCESS THE MEMEBERS :: USING THE BRACKET NOTATION :: INDEX
console.log(list[0]);
console.log(list[2]);

// Add New City
console.log("Before", list.length, list);
list.push("HYDERABAD");
console.log("After", list.length, list);

// Add another city
list.push("KASHMIR");
console.log("After", list.length, list);

// Adding more cities
list.push("Banglore", "Kochi", "Raipur", "Bhopal");
console.log("After", list.length, list);

// Add in the beginging
list.unshift("Agra");
console.log("After", list.length, list);

// ASSIGNMENT
// REMOVE OPRATOIN
// POP METHOD ::: REMOVES FROM THE END
// SHIFT ::: REMOVS FROM TEH BEGINGIN

// ASSIGNMENT :: splice() Also study slice();
// ADD OPERATION  :: IN BETWEEN
// REMOVE OPR :: IN BETWEEN
