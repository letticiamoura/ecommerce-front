import Logo from "./Logo";

import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";

export default function Footer() {
    return (

        <footer className="flex flex-col items-center justify-around w-full p-2 bg-dark-gray">
            <div className="flex flex-col md:flex-row md:gap-20 md:items-center">
                <div className="md:w-[25vw]">
                    <Logo type="logoFooter" />
                    <p className="py-5 text-sm text-light-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae natus quasi officia excepturi laborum amet</p>
                    <div className="py-2 flex gap-5 text-white">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <img src={facebook} alt="Facebook" />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <img src={instagram} alt="Instagram" />
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <img src={twitter} alt="Twitter" />
                        </a>
                    </div>
                </div>
                <div className="py-5 flex gap-10">
                    <div className="flex flex-col text-light-gray">
                        <h6 className="font-bold text-light-gray-3">Informação</h6>
                        <p className="hover:text-primary hover:cursor-pointer hover:scale-105 hover:transition-colors">Blog</p>
                        <p className="hover:text-primary hover:cursor-pointer hover:scale-105 hover:transition-colors">Segurança</p>
                        <p className="hover:text-primary hover:cursor-pointer hover:scale-105 hover:transition-colors">Wishilist</p>
                        <p className="hover:text-primary hover:cursor-pointer hover:scale-105 hover:transition-colors">Meus pedidos</p>
                        <p className="hover:text-primary hover:cursor-pointer hover:scale-105 hover:transition-colors">Trabalhe conosco</p>
                        <p className="hover:text-primary hover:cursor-pointer hover:scale-105 hover:transition-colors">Sobre Drip Store</p>
                    </div>
                    <div className="flex flex-col text-light-gray">
                        <h6 className="font-bold text-light-gray-3">Informação</h6>
                        <p className="hover:text-primary hover:cursor-pointer hover:scale-105 hover:transition-colors">Camisetas</p>
                        <p className="hover:text-primary hover:cursor-pointer hover:scale-105 hover:transition-colors">Calças</p>
                        <p className="hover:text-primary hover:cursor-pointer hover:scale-105 hover:transition-colors">Bonés</p>
                        <p className="hover:text-primary hover:cursor-pointer hover:scale-105 hover:transition-colors">Tênis</p>
                        <p className="hover:text-primary hover:cursor-pointer hover:scale-105 hover:transition-colors">Headphones</p>
                    </div>
                </div>
                <div className="md:w-[25vw]">
                    <h6 className="py-2 text-light-gray-3 font-bold">Contato</h6>
                    <p className="py-2 text-light-gray">Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                    <p className="py-2 pb-10 md:pb-5 text-light-gray">(85) 3051-3411</p>
                </div>
            </div>
            <div className="py-4 md:py-1 w-[80vw] md:w-[90vw] m-a border-t m-auto border-slate-100"></div>
            <p className="text-light-gray-2 text-center"> &copy; Direitos Reservados</p>
        </footer>
        
    );
}
