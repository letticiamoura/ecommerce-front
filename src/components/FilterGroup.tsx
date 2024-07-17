import React from 'react';

interface FilterGroupProps {
    title: string;
    inputType: 'checkbox' | 'radio';
    options: { text: string; value?: string }[];
}

const FilterGroup = ({title, inputType, options}: FilterGroupProps) => {
    return(
        <div>
            <h1 className="text-sm font-bold text-dark-gray-2">{title}</h1>
            <hr className='w-[248px] my-5 bg-light-gray-2'></hr>
            {options.map((option, index) => (
                <div className='flex align-center pb-3' key={index}>
                    <input
                        className='w-[22px] h-[22px] accent-primary'
                        type={inputType}
                        id={option.value ?? option.text}
                        name={title}
                        value={option.value}
                    />  
                <label className='pl-2 text-sm font-medium text-dark-gray-2' htmlFor={option.value ?? option.text}>{option.text}</label>
                </div>
            ))}
        </div>
    );
};

export default FilterGroup;
