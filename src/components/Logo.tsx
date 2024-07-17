import logoHeader from '../assets/logo-header.svg';
import logoFooter from '../assets/logo-footer.svg';

interface LogoProps {
    type: 'logoHeader' | 'logoFooter';
}

const Logo: React.FC<LogoProps> = ({ type }) => {

    const logoSrc = type === 'logoHeader' ? logoHeader : logoFooter;

    return (

        <div>

            <img src={logoSrc} alt="Logo" className='h-auto w-[40vw] md:w-[20vw]' />

        </div>
        
    );
};

export default Logo;
