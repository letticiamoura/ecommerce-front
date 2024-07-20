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
        <section>
            <div>
                <h2 className='flex'></h2>
            </div>
            <div>
                {children}
            </div>
        </section>
    );
};

export default Section;
