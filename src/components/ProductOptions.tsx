import  { useState } from 'react';

interface ProductOptionsProps {
    options: string[];
    radius?: string;
    shape: 'square' | 'circle';
    type: 'text' | 'color';
}

export default function ProductOptions({ options, radius, shape, type}: ProductOptionsProps) {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
  
    const handleOptionClick = (option: string) => {
      setSelectedOption(option === selectedOption ? null : option);
    };
    return(
        <div>
        <h1 className='pb-3 text-sm font-bold text-light-gray'>{type === 'text' ? 'Tamanho' : 'Cores'}</h1>
        <div className='flex gap-x-3 pb-3'>
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className='flex items-center justify-center text-2xl font-bold text-dark-gray-2 cursor-pointer'
              style={{
                border: option === selectedOption ? '2px solid #C92071' : (type === 'text' ? '1px solid #CCCCCC' : 'none'),
                width: type === 'text' ? '46px' : '31px',
                height: type === 'text' ? '46px' : '31px',
                backgroundColor: type === 'color' ? option : '#fff',
                borderRadius: shape === 'circle' ? '50%' : radius,
                color: type === 'text' ? '#000' : '#fff',
            }}
            >
              {type === 'text' ? option : null}
            </div>
          ))}
        </div>
      </div>
    );
};

