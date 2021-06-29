// Understanding the OBJECT :: JS OBJECT :: Object Literals
let count = 100;
let price = 99.99;
let status = false;
let username = "Capgemini";
let sum = (n1, n2) => n1 + n2;

// 1. Simplest Object
let user = {};

// 2. User object with properties :: data members
// lets to differentiate with JSON
let user1 = { name: "rahul" };

// 3. Object with more than one member
// the numbr of properties can 0...n
let user2 = { id: 1, name: "rohit" };

// 4. Object with more properties
let user3 = { id: 2, name: "Shrinatha", online: true };

// 5. Nested Object
let user4 = { id: 3, name: "LaxmiPriya", online: false, address: {} };

// 6. Nested Object with property.
let user5 = {
  id: 4,
  name: "Deepak Singh",
  online: false,
  address: { city: "mumbai", state: "MH", pincode: 410210 },
};

// Special Symbol Reference
let user6 = {
  id: 6,
  name: "Bhavna",
  "first-name": "Bhavna Donthoju", // BRACKET NOTATION
  online: false,
};

// 7. Little Complex Nested Object.
let college = {
  name: "ABCD COLLEGE",
  cse: {
    subjects: {
      ds: {},
      db: {},
      os: {},
    },
  },
};

// 8. user with groupList
let user7 = {
  id: 7,
  name: "Harsh Vardhan",
  online: true,
  social: "Instagram",
  groupList: ["food", "celebrities", "mahesh babu"],
  groups2: [{}, {}],
};
