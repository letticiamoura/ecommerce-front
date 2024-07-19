interface IClassStyle {
    className: string
}

export default function Nav({className}: IClassStyle) {

    return(

        <nav className={className}>

            <ul className="py-5 px-5 md:px-11 flex gap-10 items-start justify-start font-thin">
               
                <li className="text-primary font-bold underline underline-offset-8 hover:scale-110 cursor-pointer ease-linear">Home</li>
                <li className="hover:text-primary hover:font-semibold hover:underline underline-offset-8 hover:cursor-pointer transition-colors ease-out hover:scale-105 delay-100">Produtos</li>
                <li className="hover:text-primary hover:font-semibold hover:underline underline-offset-8 hover:cursor-pointer transition-colors ease-out hover:scale-105 delay-100">Categorias</li>
                <li className="hover:text-primary hover:font-semibold hover:underline underline-offset-8 hover:cursor-pointer transition-colors ease-out hover:scale-105 delay-100">Meus Produtos</li>

            </ul>

        </nav>

    )

}