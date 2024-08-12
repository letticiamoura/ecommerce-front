import React, { useState, useEffect } from 'react';

interface CartCardProps {
    className?: string;
    image: string;
    title: string;
    color?: string;
    size?: string;
    quantity?: number;
    showCounter?: boolean;
    price?: number;
    total?: number;
}

export default function CartCard({
    className,
    image,
    title,
    color,
    size,
    quantity = 0,
    showCounter = false,
    price,
    total
}: CartCardProps) {
    const [count, setCount] = useState<number>(quantity);

    useEffect(() => {
        setCount(quantity);
    }, [quantity]);

    const decreaseItem = () => setCount(prevCount => Math.max(prevCount - 1, 0));
    const increaseItem = () => setCount(prevCount => prevCount + 1);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.target.value, 10);
        setCount(isNaN(newValue) ? 0 : newValue);
    };

    return (
        <div className={`${className} flex flex-col justify-center p-4 rounded-md`}>
            <div className="flex items-center md:items-start lg:items-center border-t py-2 border-b">
                <img
                    className="h-[104px] w-[127px] cursor-pointer object-contain bg-light-blue rounded-md"
                    src={image}
                    alt={title}
                />
                <div className="ml-4 flex flex-col">
                    <h1 className="text-sm font-bold text-dark-gray">{title}</h1>
                    {color && <p className="text-sm text-light-gray">Cor: <span className="text-dark-gray">{color}</span></p>}
                    {size && <p className="text-sm text-light-gray">Tamanho: <span className="text-dark-gray">{size}</span></p>}
                    {!showCounter && price && <p className="text-base font-bold text-dark-gray">R$ {price}</p>}
                </div>
            </div>
            {showCounter && (
                <div className="flex flex-col lg:flex-row items-center mt-4">
                    <div className="flex items-center mb-2 lg:mb-0">
                        <button className="h-8 w-8 border border-light-gray-2 rounded-sm" onClick={decreaseItem}>-</button>
                        <input
                            type="text"
                            value={count}
                            onChange={handleInputChange}
                            className="h-8 w-16 text-center text-dark-gray-2 border border-light-gray-2 rounded-sm mx-2"
                        />
                        <button className="h-8 w-8 border border-light-gray-2 rounded-sm" onClick={increaseItem}>+</button>
                    </div>
                    <div className="flex md:hidden flex-col lg:justify-between w-full ">
                        <div className="mb-2 lg:mb-0 flex justify-between">
                            <p className="text-base font-bold text-dark-gray-2">UNITÁRIO</p>
                            <p className="text-base font-bold text-dark-gray-2">R$ {price}</p>
                        </div>
                        {total && (
                            <div className='flex justify-between'>
                                <p className="text-xl font-bold text-dark-gray-2">TOTAL</p>
                                <p className="text-xl font-extrabold text-primary">R$ {total}</p>
                            </div>
                        )}
                    </div>
                    <button className="text-xs md:flex md:justify-end md:w-full hover:font-bold text-red-500 hover:text-red-600 transition-colors underline mt-2" onClick={decreaseItem}>Remover item</button>
                </div>
            )}
            {!showCounter && price && total && (
                <div className="mt-4">
                    <p className="flex justify-between font-bold text-base text-dark-gray">Valor total: <span className="text-error">R$ {total}</span></p>
                </div>
            )}
        </div>
    );
}
