import { vat, amount, Payment } from "./module.js";
import * as bookImport from "./book.js";
import { default as SomeVehicle, noOfCars } from "./vehicle.js";
import { vat as foodVat, meat } from "./food.js";

// imports from our modules
import { payments } from "./our_modules/payments.js";
import { invoices } from "./our_modules/invoice.js"
import { payments, invoices } from "./our_modules/index.js";

// import("./our_modules/index.js").then((module) => {
// console.log(module.payments());
// console.log(module.invoices());
// });

async function loadModule() {
  const module = await import("./our_modules/index.js"); // Awaiting dynamic import or API call
  console.log(module.payments());
  console.log(module.invoices());
}

loadModule()

// const module = await import("./our_modules/index.js");
// console.log(module.payments());

// console.log(vat)
// console.log(foodVat)
// console.log(meat)

// console.log(bookImport.bookName)
// console.log(amount())

// const initPayment = new Payment("Ezekiel")
// console.log(initPayment.fetchPayer())

// console.log(bookName)

// const toyota = new SomeVehicle("Michael");
// console.log(toyota.fetchOwner());

// console.log(import.meta.url);

// console.log(__filename);

// try {
//   const result = await riskyOperation();
//   return result;
// } catch (error) {
//   console.error(error);
//   throw new Error("Operation failed");
// } finally {
//   // do an action
// }

//14. Destructuring

const arrayIng = ["value 1", "value 2", "value 3"]
const [result1, , result3] = arrayIng;

console.log(result3)

const myObj = {
    name: "Tobi",
    car: "Toyota",
    age: 1000
}

const { car, name: fullName, age = 500}= myObj
console.log(age)

async function fetchMTN() {
  return 20;
}

// function weAreTesting(){
// try {
//   const result = await fetchFromMTN();
// //   return result;
// } catch(error) {

//   throw new Error("No service");

// }

// }

console.log("We are still fighting");

function fetchFromMTN() {
  return 1;
}

function anAction() {
  try {
    const result = fetchFromMTN();
    return result;
  } catch (error) {
    return error.message;
  }
}

// console.log(anAction())
// console.log("We are still running");

// const promise = new Promise((resolve, reject) => {
//   // fetch from MTN
//   if (false) {
//     resolve("Success");
//   } else {
//     reject("Failed");
//   }
// });

// console.log(promise)
// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

console.log("We are still running");

const results = await Promise.all([fetchFromMTN(), anAction()]);

console.log(results);

const together = await [fetchFromMTN(), anAction()];

console.log(together);

setTimeout(() => {
  console.log("Yipeee, Michael has been released");
}, 2000);

console.log("We are still running again");
