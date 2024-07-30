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
        { category: "Tênis", name: "K-swiss V8 - Masculino", image: nikeG, price: 49.9, priceDiscount: 20 },
        { category: "Tênis", name: "Nike - Feminino", image: nikeBlue, price: 50.9, priceDiscount: 20 },
        { category: "Tênis", name: "Puma - Masculino", image: nikeB, price: 50.9, priceDiscount: 20 }
    ]

    export default function ProductListing({len}:IProductListingProps) {
        return(
            <div className='flex justify-center box-border flex-wrap md:w-[80vw] m-auto gap-x-6 gap-y-8'>
            
            {Array.from({ length: len }).map((_, index) => {
                    const product = products[index % products.length];
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
                })}
            </div>
        );
    };
