export interface Product{
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.00,
}

const tablet: Product ={
    description: "iPad Air",
    price: 300.00,
}

interface TaxCalculationOptions{
    tax: number;
    products: Product[];
}

export function taxCalculation (options:TaxCalculationOptions): [number, number]{
    const {products , tax }  = options

    let total = 0;
    products.forEach(({price}) => {
        total += price
    });

    return [total, total * tax]
}

const shoppingCart = [phone, tablet]
const tax = 0.15;

const [totalResult, taxResult] = taxCalculation({
    products: shoppingCart,
    tax,
})
// const [totalResult, taxResult] = result
console.log(`Total: ${totalResult}`)
console.log(`Taxa: ${taxResult}`)
