import React from 'react';

interface ProductCardProps {
    category: string;
    image: string;
    name: string;
    price: number;
    priceDiscount?: number;
}

const ProductCard = ({ category, image, name, price, priceDiscount }: ProductCardProps) => {
  return (
    <div className='w-fit h-fit'>
      <img className='h-[321px] w-[292px] object-cover pb-6 box-border' src={image} alt={name} />
      <p className='font-bold text-xs'>{category}</p>
      <h2 className='text-dark-gray-2 text-2xl'>{name}</h2>
      <div className='flex gap-[15px]'>
        <p className='text-light-gray text-2xl line-through'>R${priceDiscount}</p>
        <p className='text-dark-gray text-2xl font-bold'>R${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;