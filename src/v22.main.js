// REFERENCE VARIABLE
let user1 = { id: 1, username: "rahul" };
let user2 = user1;

// clone of user1 :: virual dom in REACT
let user3 = { ...user1 };
console.log(user1, user3);

// ARRAY CLONE
let list = ["A", "B", "C", "D"];
let list1 = [...list];
console.log(list, list1);
