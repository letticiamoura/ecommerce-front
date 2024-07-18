import Button from "../components/Button";
import Layout from "./Layout";

import nikeB from "../assets/nike-black.png";

import Container from "../components/Container";

export default function HomePage() {

    const handleOfertas = () => console.log("Ofertas");
    
    return(

        <div>

            <Layout>

                <Container 
                    img={nikeB}
                    onClick={handleOfertas}
                    subtitle="Melhores ofertas personalizadas"
                    title="Queima de"
                    titleText="stoque Nike"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ex eos hic quisquam molestias blanditiis vel, ?"
                />

            </Layout>

        </div>

    )

}