// Initilzed the object :: With No members
let user1 = {};

console.log("Before", user1.id);
user1.id = 100;
console.log("After", user1.id);

console.log("Before", user1.name);
user1.name = "Rohit Gupta";
console.log("After", user1.name);

// Willl initialize the memebre and Add Member lateron aswell.
let user2 = { id: 2, name: "Kowshik" };

console.log("BEFORE", user2.id);
user2.id = 200; //Change/UPDAT THE MEMBER
console.log("AFTER", user2.id);

console.log("Before", user2.online);
user2.online = true; // ADDDIN NEW MEMEBR
console.log("After", user2.online);
