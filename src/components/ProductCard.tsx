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

      <div className="h-[35vh] flex justify-center items-center bg-white">
        <img className='h-auto w-[17vw] object-cover pb-6 box-border -rotate-12' src={image} alt={name} />
      </div>

      <p className='py-1 font-bold text-xs'>{category}</p>
      
      <h2 className='text-dark-gray-2 text-xl'>{name}</h2>

      <div className='flex gap-[15px]'>
        <p className='text-light-gray text-xl line-through'>R${priceDiscount}</p>
        <p className='text-dark-gray text-xl font-bold'>R${price}</p>
      </div>

    </div>

  );
};

export default ProductCard;