// OBJECT DESTRUCTRING. :: HARD CODED
let user = {
  id: 1,
  firstName: "rohit",
  lastName: "salian",
  username: "rohit.salian",
  email: "rohit.salian@gmail.com",
  mobile: "1122334455",
  address: {
    city: "mumbai",
    state: "mh",
    pincode: "400001",
  },
  movieList: [],
  songList: [],
  followerList: [],
  followingList: [],
  chatList: [],

  likeList: [],

  postList: [{ id: 1, content: "Hello World", ts: "25th July 2020" }],

  contactList: [],
  bankList: [],
  transcationList: [],

  projecList: [],
};

function printUserAddress(userObj) {
  console.log(userObj.address.city);
  console.log(userObj.address.state);
}

// We are passing the entire object
printUserAddress(user);
