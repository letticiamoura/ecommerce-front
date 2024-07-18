import logoHeader from '../assets/logo-header.svg';
import logoFooter from '../assets/logo-footer.svg';
import { Link } from 'react-router-dom';

interface LogoProps {
    type: 'logoHeader' | 'logoFooter';
}

const Logo: React.FC<LogoProps> = ({ type }) => {

    const logoSrc = type === 'logoHeader' ? logoHeader : logoFooter;

    return (

        <div>

            <Link to="/"><img src={logoSrc} alt="Logo" className='h-auto w-[40vw] md:w-[20vw]' /></Link>

        </div>
        
    );
};

export default Logo;
