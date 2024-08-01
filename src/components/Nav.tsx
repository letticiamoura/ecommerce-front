import { NavLink, useNavigate } from "react-router-dom"

interface IClassStyle {
    className: string
}

export default function Nav({className}: IClassStyle) {

    const navigate = useNavigate();

    const handleEntrar = () => navigate("/ecommerce-front/login");
    const handleRegister = () => navigate("/ecommerce-front/register")

    return(

        <nav className={className}>
            <div className="pt-5">
                <p className="text-base font-bold text-dark-gray-2 md:hidden">Olá Francisco</p>
                <div className="py-5 px-3 md:hidden md:px-11 flex flex-col md:flex-row gap-5 md:gap-10 items-start justify-start font-thin">
                    <a href="" className={'text-dark-gray-2 text-base hover:scale-105 hover:text-primary transition-colors'}>Minhas Informações</a>
                    <a href="" className={'text-dark-gray-2 text-base hover:scale-105 hover:text-primary transition-colors'}>Métodos de Pagamento</a>         
                </div>
                <hr className='md:hidden my-5 bg-light-gray-2'></hr>
            </div>
            <ul className="py-5 px-3 md:px-11 flex flex-col md:flex-row gap-5 md:gap-10 items-start justify-start font-thin">

                <p className="text-base font-bold text-dark-gray-2 md:hidden">Páginas</p>

                <NavLink
                    to="/ecommerce-front/"
                    className={({ isActive }) =>
                    isActive ? 'text-primary font-bold text-base underline underline-offset-8 scale-110 transition-all ' : 'text-dark-gray-2 text-base hover:scale-105 md:text-lg hover:text-primary transition-colors'
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/ecommerce-front/products"
                    className={({ isActive }) =>
                    isActive ? 'text-primary font-bold underline text-base underline-offset-8 scale-110 transition-all ' : 'text-dark-gray-2 hover:scale-105 text-base md:text-lg hover:text-primary transition-colors'
                    }
                >
                    Produtos
                </NavLink>

                <NavLink
                    to="/ecommerce-front/categorys"
                    className={({ isActive }) =>
                    isActive ? 'text-primary font-bold underline text-base underline-offset-8 scale-110 transition-all ' : 'text-dark-gray-2 hover:scale-105 text-base md:text-lg hover:text-primary transition-colors'
                    }
                >
                    Categorias
                </NavLink>

                <NavLink
                    to="/myorders"
                    className={({ isActive }) =>
                    isActive ? 'text-primary font-bold underline text-base underline-offset-8 scale-110 transition-all ' : 'text-dark-gray-2 hover:scale-105 text-base md:text-lg hover:text-primary transition-colors'
                    }
                >
                    Meus pedidos
                </NavLink>

            </ul>

            <div className="flex flex-col w-[60vw] pb-10 bottom-0 gap-5 md:hidden">

                <div className="py-1 w-[62vw] md:w-[90vw] m-a border-t m-auto border-slate-light-gray-2"></div>

                <button onClick={handleEntrar} className="w-full py-3 px-5 bg-primary text-white text-xl font-medium rounded-md hover:bg-pink-500 hover:scale-105">Entrar</button>

                <button
                    onClick={handleRegister}
                    className="lg:text-lg text-md underline underline-offset-4 hover:text-primary hover:font-medium hover:transition-colors hover:scale-105 ease-out"
                >
                    Cadastre-se
                </button>
        </div>

        </nav>

    )

}
