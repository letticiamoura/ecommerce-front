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
        <div>
            <h1 className='text-[32px] font-bold text-dark-gray'>{name}</h1>
            <p className='text-xs font-medium text-dark-gray-3'>{reference}</p>
            <div className='flex'>
                <p className='text-sm bg-warning rounded'>{stars} <img src="./assets/star.icon.svg" /></p>
                <p className='text-sm text-light-gray'>({rating} avaliações)</p>
            </div>
            <div className='flex'>
                <p className='text-base text-light-gray-2 line-through'>R${price}</p>
                <p className='text-[32px] text-dark-gray-2'>R${priceDiscount}</p>
            </div>
            <p className='text-sm text-dark-gray-2'>{description}</p>
        </div>
    );
};

export default BuyBox;
