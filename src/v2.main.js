import mysql from "mysql";

import sum from "./v2.calculator.js";
import { subtract } from "./v2.calculator.js";

let output = sum(10, 20);
console.log("SUM", output);

let output1 = subtract(20, 10);
console.log("DIFF", output1);
