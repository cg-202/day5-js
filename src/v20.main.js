function printUserDetailsV1({ userName, email, mobile, city }) {
  console.log(userName);
  console.log(email);
  console.log(mobile);
  console.log(city);
}

let user = {
  email: "abcd@gmail.com",
  mobile: "12121212",
  city: "mumbai",
  userName: "rohit",
};
printUserDetailsV1(user);

// THIS CAN BE ENHANCED
function printUserDetails(userName, email, mobile, city) {
  console.log(userName);
  console.log(email);
  console.log(mobile);
  console.log(city);
}

// proper way to call the function.
printUserDetails("abcd", "abcd@gamil.com", "12122", "mumbai");

// wrong :: values are misplaced
printUserDetails("maumbi", "11222333", "abcd@gmai.com", "abcd");
