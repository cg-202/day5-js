// Reference obejct.
let user = {
  id: 1,
  name: "Deepak Singh",
  online: false,
  address: { city: "mumbai", state: "MH", pincode: 410210 },
};

// Access the members of the obejct
// Using DOT OPERATOR :: BRACKET NOTATION
console.log(user.id, user["id"]);
console.log(user.name, user["name"]);
console.log(user.address, user["address"]);
console.log(user.address.city);

// Special Symbol :: DASH :: HYPTHEN :: MINUS
let user2 = {
  id: 2,
  name: "Bhavna",
  "first-name": "Bhavna Donthoju",
  online: false,
};

console.log(user2.id);
console.log(user2["first-name"]);
