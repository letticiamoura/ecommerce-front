import React from 'react';

interface BuyBoxProps {
    name: string;
    reference: string;
    stars: number;
    rating: number;
    price: number;
    priceDiscount?: number;
    description: string;
}

const BuyBox = ({name, reference, stars, rating, price, priceDiscount, description}: BuyBoxProps) =>{
    return(
        <div className='pb-6'>
            <h1 className='text-[32px] font-bold text-dark-gray'>{name}</h1>
            <p className='py-3 text-xs font-medium text-dark-gray-3'>REF: {reference}</p>
            <div className='flex gap-x-2'>
                <p className='flex gap-x-2 py-[3px] px-2 font-black text-sm bg-warning rounded text-white'>{stars} <img src="./assets/star-icon.svg" /></p>
                <p className='text-sm font-medium text-light-gray'>({rating} avaliações)</p>
            </div>
            <div className='flex gap-x-2 py-5 items-center h-max'>
                <p className='text-base font-bold text-light-gray-2 line-through'>R${price}</p>
                <p className='text-[32px] font-bold text-dark-gray-2'><span className='font-normal text-base'>R$</span>{priceDiscount}</p>
            </div>
            <h1 className='pb-2 text-sm font-bold text-light-gray'>Descrição do produto</h1>
            <p className='text-sm font-medium text-dark-gray-2'>{description}</p>
        </div>
    );
};

export default BuyBox;
