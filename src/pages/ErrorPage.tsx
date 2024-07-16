import error from "../assets/error.gif";

export default function PageError() {

    return(

        <section className="h-screen bg-light-gray-3">

            <div className="flex flex-col justify-center items-center">
                <img src={error} alt="Page not found" />
                <button className="p-2 w-36 border bg-primary rounded-md text-light-gray-3 hover:scale-110 hover:bg-error hover:cursor-pointer hover:transition-colors">Voltar</button>
            </div>

        </section>
        
    )

}