import { Link } from "react-router-dom";
import page from "../assets/page.gif";
import Layout from "./Layout";

export default function PageInConstruction() {

    return(
        <Layout>
            <div className="py-16 md:py-0 md:pb-10 pb-10 flex flex-col justify-center items-center">
                <h1 className="text-center text-2xl py-10 md:text-3xl font-extrabold text-primary">⚠ Pagina em construção ⚠</h1>
                <img src={page} alt="Page not found" className="object-contain lg:w-[30vw]" />
                <Link to="/ecommerce-front/home" className="p-2 w-36 border bg-primary rounded-md text-light-gray-3 hover:scale-110 hover:bg-error hover:cursor-pointer hover:transition-colors text-center">
                Voltar
            </Link>
            </div>
        </Layout>
        
    )

}