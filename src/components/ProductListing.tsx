import React from "react";
import ProductCard from "./ProductCard";

import nikeG from "../assets/products/nike-yellow.png";

interface Product {
    category: string;
    image: string;
    name: string;
    price: number;
    priceDiscount?: number;
}

const products = [
    { category: "Tênis", name: "K-swiss V8 - Masculino", image: nikeG, price: 49.9, priceDiscount: 20 },
]

const testProduct: Product = {
    category: "Tênis",
    name: "K-swiss V8 - Masculino",
    image: nikeG,
    price: 49.9,
    priceDiscount: 20
};

const ProductListing: React.FC = () => {
    return(
        <div className='flex justify-center box-border flex-wrap gap-x-6 gap-y-8'>
            {/* Para teste: gera 9 cópias do testProcuts */}
            {[...Array(8)].map((_, index) => (
                <ProductCard
                    key={index}
                    category={testProduct.category}
                    name={testProduct.name}
                    image={testProduct.image}
                    price={testProduct.price}
                    priceDiscount={testProduct.priceDiscount}
                />
            ))}
        </div>
    );
};

export default ProductListing;
