import React, { useState, useEffect } from 'react';

interface CartCardProps {
    image: string;
    title: string;
    color?: string;
    size?: string;
    quantity?: number;
    price?: number;
    total?: number;
}

export default function CartCard({image, title, color, size, quantity = 0, price, total}: CartCardProps) {
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
    return(
        <div>
            {color && size && price && <hr className='my-5 bg-light-gray-2'></hr> }
            <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="flex">
                    <img className="h-[104px] w-[127px] mr-5 box-border object-contain bg-light-blue" src={image} alt={title} />
                    <span>
                        <h1 className="text-sm font-bold text-dark-gray">{title}</h1>
                        {color && <p className="py-2 text-sm font-medium text-light-gray">Cor: <span className="text-dark-gray">{color}</span></p>}
                        {size && <p className="text-sm font-medium text-light-gray">Tamanho: <span className="text-dark-gray">{size}</span></p>}
                    </span>
                </div>
                {price && 
                <div className="flex flex-col lg:flex-row items-center gap-7">
                    <div className="flex flex-col items-center ">
                        <h1 className="block lg:hidden font-medium font-sm self-start pb-3 text-dark-gray-2">QUANTIDADE</h1>
                        <div className="flex items-center pb-2">
                            <button className="h-9 w-[85px] lg:w-9 border border-light-gray-2 rounded-sm" onClick={decreaseItem}>-</button>
                            <input
                                type="text"
                                value={count}
                                onChange={handleInputChange}
                                className="h-9 w-[85px] lg:w-9 text-center text-dark-gray-2 text-xs"
                            />
                            <button className="h-9 w-[85px] lg:w-9 border border-light-gray-2 rounded-sm" onClick={increaseItem}>+</button>
                        </div>
                        <button className='text-xs text-dark-gray-2 underline' onClick={decreaseItem}>Remover item</button>
                    </div>
                    <span className="flex justify-between w-full">
                        <h1 className="block lg:hidden font-medium font-sm text-dark-gray-2">UNITÁRIO</h1>
                        <p className="text-dark-gray-2 text-base font-bold">R$ {price}</p>
                    </span>
                    <span className="flex justify-between w-full">
                        <h1 className="block lg:hidden font-medium font-sm text-dark-gray-2">TOTAL</h1>
                        <p className="text-dark-gray-2 text-base font-bold">R$ {total}</p>
                    </span>
                </div>
                }
            </div>
        </div>
    );
};
