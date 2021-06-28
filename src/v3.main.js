// CORE JAVSCRIPT
let counter = 100;
let price = 99.99;
let username = "Capgemini";
let status = true;

// PLEASE CONCENTRATE HERE
// 1. DEFAULT
function sum(n1, n2) {
  return n1 + n2;
}

// 2. Annonymous Function.
// Function having no Name.
// Must assign this to a variable:: if you want to reuse it.
let sumAsAnnonymousFunction = function (n1, n2) {
  return n1 + n2;
};

// 3. Arrow Function :: Lamda Funciton in Java
let sumAsArrowFunction = (n1, n2) => {
  return n1 + n2;
};

let sumAsArrowFunction1 = (n1, n2) => n1 + n2;
