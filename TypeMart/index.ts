import products from "./products";

const productName: string = "fanny pack";
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
const shippingAddress: string = "575 Broadway, New York City, New York";

const product = products.filter((product) => product.name === productName)[0];

if (product.preOrder === "true") {
  console.log("We will send you a message when your product is on its way.");
}

if (product.price > 25) {
  shipping = 0;
  console.log("You won a free shipping!!");
} else {
  shipping = 5;
}

if (shippingAddress.match("New York")) {
  taxPercent = 0.1;
} else {
  taxPercent = 0.05;
}

taxTotal = product.price * taxPercent;
total = taxTotal + product.price + shipping;

console.log(
  `Receipt:\n Product Name: ${product.name}\n Shipping Address: ${shippingAddress}\n Total Price: ${total}\n Tax Total: ${taxTotal}\n`
);
