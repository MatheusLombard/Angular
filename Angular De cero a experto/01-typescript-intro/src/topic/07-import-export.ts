import { type Product, taxCalculation } from "./06-function-destructuring";
const shoppingCart: Product[] = [
  {
    description: "Nokia A1",
    price: 150.0,
  },
  {
    description: "iPad Air",
    price: 300.0,
  },
];
const tax = 0.15
const [total, taxResult] = taxCalculation({
    products: shoppingCart,
    tax,
})

console.log(`Total: ${total}`)
console.log(`tax: ${taxResult}`)