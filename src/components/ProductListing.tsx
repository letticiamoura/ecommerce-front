import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import nikeBlue from "../assets/products/nike-blue.png";
import nikeG from "../assets/products/nike-black.png";
import nikeB from "../assets/products/nike-green.png";

interface IProductListingProps {
    len: number;
}

interface Product {
    category: string;
    image: string;
    name: string;
    price: number;
    priceDiscount?: number;
}

const products: Product[] = [
    { category: "Tênis", name: "Tênis K-swiss V8 - Masculino", image: nikeG, price: 49.9, priceDiscount: 20 },
    { category: "Tênis", name: "Tenis Nike - Feminino", image: nikeBlue, price: 50.9, priceDiscount: 20 },
    { category: "Tênis", name: "Tênis Puma - Masculino", image: nikeB, price: 50.9, priceDiscount: 20 }
];

export default function ProductListing({ len }: IProductListingProps) {
    const [searchParams] = useSearchParams();
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    const query = searchParams.get("filter")?.toLowerCase() || "";

    useEffect(() => {
        // Filtra os produtos com base na query
        const result = products.filter(product => 
            product.name.toLowerCase().includes(query)
        );
        setFilteredProducts(result);
    }, [query]);

    return (
        <div className='flex justify-center box-border flex-wrap md:w-[80vw] m-auto gap-x-6 gap-y-8'>
            {filteredProducts.length === 0 ? (
                <p className='text-center pb-[60%] w-full mt-4 text-lg text-gray-500'>
                    Nenhum produto encontrado.
                </p>
            ) : (
                Array.from({ length: len }).map((_, index) => {
                    const product = filteredProducts[index % filteredProducts.length];
                    return (
                        <ProductCard
                            key={index}
                            category={product.category}
                            name={product.name}
                            image={product.image}
                            price={product.price}
                            priceDiscount={product.priceDiscount}
                        />
                    );
                })
            )}
        </div>
    );
}
