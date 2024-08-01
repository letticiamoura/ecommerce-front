import { NavLink } from "react-router-dom";
import Layout from "./Layout";
import FilterGroup from "../components/FilterGroup";

export default function PurchasePage() {
    return(
        <Layout>
            <div className="flex flex-col lg:flex-row lg:gap-4 justify-center pt-32 lg:pt-14 px-5 lg:px-0">
                <div className="lg:w-[60%]">
                    <div>
                        <h1 className="pb-6 md:text-start text-2xl font-bold">Finalizar Compra</h1>
                        <form className="px-5 py-10 lg:py-5 h-auto flex gap-2 flex-col justify-center bg-white rounded-md shadow-sm m-auto">
                            <h1 className="text-sm font-bold text-dark-gray-2">Informações Pessoais</h1>
                            <hr className=' my-3 bg-light-gray-2'></hr>    
                            <label htmlFor="login" className="py-2 font-medium md:text-sm">Nome Completo *<br />
                                <input type="text" placeholder="Insira seu nome" className="mt-3 py-3 px-2 rounded-md w-full bg-light-gray-3 text-lg md:py-2 md:text-sm focus:border-pink-500 focus:ring-pink-500 focus:ring-2 outline-none focus:transition-all duration-200" required />
                            </label>
                            <label htmlFor="login" className="py-2 font-medium md:text-sm">CPF *<br />
                                <input type="text" placeholder="Insira seu CPF" className="mt-3 py-3 px-2 rounded-md w-full bg-light-gray-3 text-lg md:py-2 md:text-sm focus:border-pink-500 focus:ring-pink-500 focus:ring-2 outline-none focus:transition-all duration-200" required />
                            </label>
                            <label htmlFor="login" className="py-2 font-medium md:text-sm">E-mail *<br />
                                <input type="text" placeholder="Insira seu email" className="mt-3 py-3 px-2 rounded-md w-full bg-light-gray-3 text-lg md:py-2 md:text-sm focus:border-pink-500 focus:ring-pink-500 focus:ring-2 outline-none focus:transition-all duration-200" required />
                            </label>
                            <label htmlFor="login" className="py-2 font-medium md:text-sm">Celular *<br />
                                <input type="text" placeholder="Insira seu celular" className="mt-3 py-3 px-2 rounded-md w-full bg-light-gray-3 text-lg md:py-2 md:text-sm focus:border-pink-500 focus:ring-pink-500 focus:ring-2 outline-none focus:transition-all duration-200" required />
                            </label>
                        </form>
                        <form className="px-5 py-10 lg:py-5 my-5 h-auto flex gap-2 flex-col justify-center bg-white lg:w-full rounded-md shadow-sm m-auto">
                            <h1 className="text-sm font-bold text-dark-gray-2">Informações de Entrega</h1>
                            <hr className=' my-3 bg-light-gray-2'></hr>    
                            <label htmlFor="login" className="py-2 font-medium md:text-sm">Endereço *<br />
                                <input type="text" placeholder="Insira seu endereço" className="mt-3 py-3 px-2 rounded-md w-full bg-light-gray-3 text-lg md:py-2 md:text-sm focus:border-pink-500 focus:ring-pink-500 focus:ring-2 outline-none focus:transition-all duration-200" required />
                            </label>
                            <label htmlFor="login" className="py-2 font-medium md:text-sm">Bairro *<br />
                                <input type="text" placeholder="Insira seu bairro" className="mt-3 py-3 px-2 rounded-md w-full bg-light-gray-3 text-lg md:py-2 md:text-sm focus:border-pink-500 focus:ring-pink-500 focus:ring-2 outline-none focus:transition-all duration-200" required />
                            </label>
                            <label htmlFor="login" className="py-2 font-medium md:text-sm">Cidade *<br />
                                <input type="text" placeholder="Insira sua cidade " className="mt-3 py-3 px-2 rounded-md w-full bg-light-gray-3 text-lg md:py-2 md:text-sm focus:border-pink-500 focus:ring-pink-500 focus:ring-2 outline-none focus:transition-all duration-200" required />
                            </label>
                            <label htmlFor="login" className="py-2 font-medium md:text-sm">CEP *<br />
                                <input type="text" placeholder="Insira seu CEP" className="mt-3 py-3 px-2 rounded-md w-full bg-light-gray-3 text-lg md:py-2 md:text-sm focus:border-pink-500 focus:ring-pink-500 focus:ring-2 outline-none focus:transition-all duration-200" required />
                            </label>
                            <label htmlFor="login" className="py-2 font-medium md:text-sm">Complemento<br />
                                <input type="text" placeholder="Insira complemento" className="mt-3 py-3 px-2 rounded-md w-full bg-light-gray-3 text-lg md:py-2 md:text-sm focus:border-pink-500 focus:ring-pink-500 focus:ring-2 outline-none focus:transition-all duration-200" required />
                            </label>
                        </form>
                    </div>
                </div>
            </div>                           
        </Layout>
    );
};
