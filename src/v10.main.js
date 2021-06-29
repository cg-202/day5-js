// DELETE MEMEBER DEMO
let user1 = { id: 100, name: "Alabhya Singh", status: true };

console.log("Before", user1.id, user1);
delete user1.id; // it delets the id member/property from the object
console.log("After", user1.id, user1);
