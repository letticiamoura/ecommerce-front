import { ReactNode } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

interface ILayoutProps {
    children: ReactNode;
}

export default function Layout({children}: ILayoutProps) {

    return(

        <div>

            <Header />

            <main className="h-auto">
                {children}
            </main>

            <Footer />

        </div>

    )

}
