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

function printUserAddress({ email, mobile, adderss }) {
  console.log(email);
  console.log(mobile);
  console.log(adderss);
}

// We are passing the entire object
let email1 = user.email;
let mobile1 = user.mobile;
let address1 = user.address;

// Is a way to access the member of the object.
let { email, mobile, address } = user;

printUserAddress({ email, mobile, address });
