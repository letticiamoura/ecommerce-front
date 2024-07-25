import { NavLink } from "react-router-dom"

interface IClassStyle {
    className: string
}

export default function Nav({className}: IClassStyle) {

    return(

        <nav className={className}>

            <ul className="py-5 px-5 md:px-11 flex gap-10 items-start justify-start font-thin">

                <NavLink
                    to="/"
                    className={({ isActive }) =>
                    isActive ? 'text-primary font-bold underline underline-offset-8 scale-110 transition-all ' : 'text-dark-gray font-medium hover:scale-105 hover:text-primary transition-colors'
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/products"
                    className={({ isActive }) =>
                    isActive ? 'text-primary font-bold underline underline-offset-8 scale-110 transition-all ' : 'text-dark-gray font-medium hover:scale-105 hover:text-primary transition-colors'
                    }
                >
                    Produtos
                </NavLink>

                <NavLink
                    to="/categorys"
                    className={({ isActive }) =>
                    isActive ? 'text-primary font-bold underline underline-offset-8 scale-110 transition-all ' : 'text-dark-gray font-medium hover:scale-105 hover:text-primary transition-colors'
                    }
                >
                    Categorias
                </NavLink>

                <NavLink
                    to="/myorders"
                    className={({ isActive }) =>
                    isActive ? 'text-primary font-bold underline underline-offset-8 scale-110 transition-all ' : 'text-dark-gray font-medium hover:scale-105 hover:text-primary transition-colors'
                    }
                >
                    Meus pedidos
                </NavLink>

            </ul>

        </nav>

    )

}