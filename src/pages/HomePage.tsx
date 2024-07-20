import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import  { Swiper, SwiperSlide } from "swiper/react";

import Layout from "./Layout";

import nikeB from "../assets/nike-black.png";
import nikeBlue from "../assets/nike-blue.png";
import nikeGreen from "../assets/nike-green.png";

import Container from "../components/Container";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

import "../index.css"
import Section from '../components/Section';
import ProductListing from "../components/ProductListing";

export default function HomePage() {

    const data = [
        {id: 1, img: nikeB},
        {id: 2, img: nikeBlue},
        {id: 3, img: nikeGreen}
    ]

    const handleOfertas = () => console.log("Ofertas");
    
    return(

        <div>

            <Layout>

                <Swiper
                    slidesPerView={1}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    pagination={{clickable: true}}
                    navigation
                >

                    {
                        data.map((item) => (
                            <SwiperSlide key={item.id}>
                                <Container 
                                    img={item.img}
                                    onClick={handleOfertas}
                                    subtitle="Melhores ofertas personalizadas"
                                    title="Queima de"
                                    titleText="stoque Nike"
                                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ex eos hic quisquam molestias blanditiis vel, ?"
                                />
                            </SwiperSlide>
                        ))
                    }

                </Swiper>         
                <Section title="Populares" link={{ text: "Show More", href: "https://redirect.link" }}>
                    <ProductListing />
                </Section>
            </Layout>

        </div>

    )

}