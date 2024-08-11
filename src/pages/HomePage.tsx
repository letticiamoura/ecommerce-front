import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import  { Swiper, SwiperSlide } from "swiper/react";

import "../index.css";

import Layout from "./Layout";

import nike from "../assets/tenis.svg";

import tenis from "../assets/card/tenis.svg";
import calca from "../assets/card/calca.svg";
import camiseta from "../assets/card/camisa.svg";
import headphone from "../assets/card/headphones.svg";

import blusa from "../assets/card/blusa.svg";
import shoes from "../assets/card/shoes.svg";
import phone from "../assets/card/phone.svg";

import nikeB from "../assets/products/nike-black.png";
import nikeBlue from "../assets/products/nike-blue.png";
import nikeGreen from "../assets/products/nike-green.png";

import Container from "../components/Container";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

import "../index.css"
import PromoCard from "../components/PromoCard";
import Button from "../components/Button";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";

export default function HomePage() {

    const data = [
        {id: 1, img: nikeB},
        {id: 2, img: nikeBlue},
        {id: 3, img: nikeGreen}
    ];

    const cardPromo = [
        {id: 1, promo: 30, text: "Novo drop Supreme", img: blusa },
        {id: 2, promo: 30, text: "Coleção Adidas", img: shoes },
        {id: 3, promo: 30, text: "Novo Beat Bass", img: phone }
    ];

    const colecaoDestaque = [
        {id: 1, title: "Camisetas", img: camiseta},
        {id: 2, title: "Calças", img: calca},
        {id: 3, title: "Headphones", img: headphone},
        {id: 4, title: "Tênis", img: tenis}
    ]

    const handleOfertas = () => alert("Ops, em contrução!!");
    
    return(

        <div className="bg-light-gray-3">

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
                                    titleText="stoque Nike 🔥"
                                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ex eos hic quisquam molestias blanditiis vel, ?"
                                />
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
                
                <section>

                    <div>
                        <h3 className="px-5 pt-5 pb-4 lg:px-48 font-bold text-xl text-start">Coleções em destaque</h3>

                        <div className="pb-5 flex flex-col md:flex-row md:justify-center md:gap-5">
                            {
                                cardPromo?.map((item) => (
                                    <div className="py-3 flex flex-col items-center">
                                        <PromoCard
                                            img={item.img}
                                            promo={item.promo}
                                            text={item.text}
                                            onClick={handleOfertas}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="py-5 flex flex-col">

                        <h3 className="px-5 text-xl text-dark-gray font-bold md:text-center">Coleções em destaques</h3>
                            
                        <div className="gap-3 py-5 flex justify-around items-center md:justify-center md:gap-20">
                            {
                                colecaoDestaque.map((item) => (
                                    <div key={item.id} className="py-2 flex gap-3 flex-col items-center">
                                        <div className="h-auto p-5 w-auto md:p-3 hover:cursor-pointer rounded-full bg-white shadow-sm hover:shadow-lg hover:scale-110 duration-200 transition-shadow">
                                            <img src={item.img} alt={item.title} className="svg" />
                                        </div>
                                        <h3 className="font-medium hover:text-primary hover:scale-105 hover:cursor-pointer">{item.title}</h3>
                                    </div>
                                ))
                            }
                        </div>

                    </div>

                </section>

                <Section className="w-full pt-14 pb-20 px-2 box-border" title="Produtos em alta" link={{text:"Ver todos"}}>
                    <ProductListing len={8} />
                </Section>   

                <section className="bg-white">
                    <div className="h-auto md:h-[50vw] lg:h-[60vh] py-5 flex flex-col md:flex-row md:justify-center md:items-center">
                        <div className="h-72 w-72 bg-gradient-to-b from-gray-200 to-white rounded-full flex items-center justify-center m-auto">
                            <img src={nike} alt="Tênis Nike" className="w-3/4 h-auto" />
                        </div>
                        <div className="pb-10 px-10 flex flex-col sm:items-center md:items-start md:w-[50vw]">
                            <p className="text-warning font-bold text-start">Oferta especial</p>
                            <h2 className="py-4 text-3xl font-semibold text-dark-gray-2 md:text-4xl">Air Jordan edição de <br /> <span>colecionador</span></h2>
                            <p className="py-1 pb-5 text-md font- md:font-normal text-dark-gray-2 sm:w-[60vw] md:w-auto md:text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iusto, ex corrupti corporis facere quaerat iste fugit assumenda expedita laborum.</p>
                            <Button text="Ver oferta" onClick={handleOfertas} />
                        </div>
                    </div>
                </section>    

            </Layout>

        </div>

    )

}