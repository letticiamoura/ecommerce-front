import React from 'react';

interface LinkProps{
    text: string;
    href: string;
}

interface SectionProps{
    title: string;
    titleAlign?: 'left' | 'center';
    link?: LinkProps;
    children: React.ReactNode;
}

const Section = ({title, titleAlign = 'left', link, children}: SectionProps) => {
    return(
        <section className='bg-light-gray-3'>
            <div className={`flex ${titleAlign === 'center' ? 'justify-center' : 'justify-between'} pt-10 pb-7 px-10`}>
                <h2 className='flex justify-end font-bold text-dark-gray-2 text-2xl'>{title}</h2>
                {link && (
                    <a 
                    className='text-lg text-primary tracking-wider'
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                        {link.text}
                    </a>
                )}  
            </div>
            <div>
                {children}
            </div>
        </section>
    );
};

export default Section;
