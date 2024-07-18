import { Link } from "react-router-dom";
import error from "../assets/error.gif";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function PageError() {

    return(

        <section className="h-auto bg-light-gray-3">

            <Header />

            <div className="pb-10 flex flex-col justify-center items-center">
                <img src={error} alt="Page not found" className="object-cover lg:w-[30vw]" />
                <Link to="/" className="p-2 w-36 border bg-primary rounded-md text-light-gray-3 hover:scale-110 hover:bg-error hover:cursor-pointer hover:transition-colors text-center">
                Voltar
                </Link>
            </div>

            <Footer />

        </section>
        
    )

}