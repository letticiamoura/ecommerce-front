import React from "react";
import ProductCard from "./ProductCard";

interface Product {
    category: string;
    image: string;
    name: string;
    price: number;
    priceDiscount?: number;
}

const testProduct: Product = {
    category: "Tênis",
    name: "K-swiss V8 - Masculino",
    image: "https://th.bing.com/th/id/OIP.rFTW9fQ72hqG5FqA1j3QbwHaHa?rs=1&pid=ImgDetMain",
    price: 49.9,
    priceDiscount: 20
};

const ProductListing: React.FC = () => {
    return(
        <div className='flex justify-center box-border flex-wrap gap-8'>
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
            {/* código original:
                {products.map((product, index) => (
                <ProductCard 
                key={index} 
                category={product.category}
                name={product.name} 
                image={product.image} 
                price={product.price} 
                priceDiscount={product.priceDiscount} 
                />
            ))} */}
        </div>
    );
};

export default ProductListing;
