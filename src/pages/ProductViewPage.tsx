import Layout from "./Layout";

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import blue from "../assets/products/nike-blue.png";
import black from "../assets/products/nike-black.png";
import green from "../assets/products/nike-green.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import ProductListing from "../components/ProductListing";
import Section from "../components/Section";

export default function ProductViewPage() {

    const [selectedSize, setSelectedSize] = useState<number | undefined>(undefined);
    const [selectedColor, setSelectedColor] = useState<string | undefined>(undefined);

    const sizes = [39, 40, 41, 42];

    const colors = [
        { id: 1, color: "bg-blue-500" },
        { id: 2, color: "bg-red-500" },
        { id: 3, color: "bg-yellow-500" },
        { id: 4, color: "bg-purple-500" }
    ];

    const nike = [
        {id: 1, images: blue, className: "bg-blue-100 p-5 object-cover w-full m-auto rounded-md px-20 sm:px-48 md:px-20 lg:px-48"},
        {id: 2, images: black, className: "bg-amber-100 p-5 object-cover w-full m-auto rounded-md px-20 sm:px-48 md:px-20 lg:px-48"},
        {id: 3, images: green, className: "bg-green-100 p-5 object-cover w-full m-auto rounded-md px-20 sm:px-48 md:px-20 lg:px-48"},
    ];

    const nikeThumbs = [
        {id: 1, images: blue, color: "bg-blue-100"},
        {id: 2, images: black, color: "bg-amber-100"},
        {id: 3, images: green, color: "bg-green-100"},
    ];

    return (
        
        <Layout>
            <div className="py-10 px-5 pt-20 md:pt-0 bg-light-gray-3">

                <div>

                    <div>

                        <h3 className="py-3 pb-5 text-md font-medium text-dark-gray-2">
                        Home / Produtos / Tênis / Nike / <br className="md:hidden" />
                            <span>
                            Tênis Nike Revolution 6 Next Nature Masculino</span>
                        </h3>

                        <div className="md:flex md:justify-center md:gap-10">
                            
                            <div>
                                <div className="mb-5">
                                    <Swiper
                                        slidesPerView={1}
                                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                                        pagination={{ clickable: true }}
                                        navigation
                                        className="h-[40vh] w-[90vw] md:h-[50vh] md:w-[50vw] transition-all duration-200"
                                    >
                                        {nike.map((item) => (
                                            <SwiperSlide key={item.id}>
                                                <img src={item.images} alt="Nike product" className={item.className} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>

                                <div className="flex justify-center mb-5">
                                    {nikeThumbs.map((item) => (
                                        <img 
                                            key={item.id} 
                                            src={item.images} 
                                            alt="Nike thumbnail" 
                                            className={`w-[110px] p-2 h-[95px] object-cover rounded-md mx-1 cursor-pointer ${item.color}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div>
                                
                                <h1 className="text-2xl font-bold mb-2 text-dark-gray">Tênis Nike Revolution <br /> 6 Next Nature Masculino</h1>
                                <p className="text-gray-600 text-sm mb-4">Casual | Nike | REF: DD84769111</p>

                                <div className="flex items-center pb-3 gap-5">
                                    <p className="flex gap-2">
                                        <FaStar size="20px" color="#F6AA1C" className="hover:scale-110 hover:cursor-pointer transition-all"/>
                                        <FaStar size="20px" color="#F6AA1C" className="hover:scale-110 hover:cursor-pointer transition-all"/>
                                        <FaStar size="20px" color="#F6AA1C" className="hover:scale-110 hover:cursor-pointer transition-all"/>
                                        <FaStar size="20px" color="#F6AA1C" className="hover:scale-110 hover:cursor-pointer transition-all"/>
                                        <FaStar size="20px" color="#F6AA1C" className="hover:scale-110 hover:cursor-pointer transition-all"/>
                                    </p>
                                    
                                    <div className="flex items-center gap-3">
                                        <p className="flex gap-2 items-center text-lg bg-warning text-white font-medium p-1 justify-center rounded-md w-16">4.7 
                                            <FaStar size="15px" color="#fff"  /> 
                                        </p>
                                        <p className="text-light-gray font-medium">(90) Avaliações</p>
                                    </div>
                                </div>

                                <div className="flex items-center mb-1">
                                    <span className="text-2xl font-bold mr-2 text-dark-gray">R$ 219,00</span>
                                    <span className="text-gray-500 line-through text-lg">R$ 249,00</span>
                                </div>

                                <p className="text-gray-900 font-medium text-sm mb-2 md:w-[35vw]">
                                    <span className="text-lg md:text-md font-bold text-light-gray">Descrição do produto</span> <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sea aut consectetur, modi iste quod delectus veritatis quae deserunt aspernatur eius ad autem ipsum excepturi obcaecati. 
                                </p>

                                <div className="mb-2">
                                    <h2 className="text-lg md:text-md font-bold mb-2 text-light-gray">Tamanho</h2>
                                    <div className="flex gap-3">
                                        {sizes.map((size) => (
                                                <button
                                                    key={size}
                                                    className={`w-10 h-10 md:w-8 md:h-8 border rounded-md ${selectedSize === size ? 'border-primary bg-primary text-white font-bold border-2 shadow-lg transition-all duration-200 hover:scale-110' : ''}`}
                                                    onClick={() => setSelectedSize(size)}
                                                >
                                                    {size}
                                                </button>
                                            ))}
                                    </div>
                                </div>

                                <div className="mb-4">

                                    <h2 className="text-lg md:text-md font-bold mb-2 text-light-gray">Cores</h2>

                                    <div className="flex space-x-2">
                                        {colors.map((color) => (
                                            <button
                                                key={color.id}
                                                className={`w-10 h-10 md:w-8 md:h-8 rounded-full ${color.color} ${selectedColor === color.color ? 'border-4 border-primary shadow-lg transition-all duration-200 scale-110' : ''}`}
                                                onClick={() => setSelectedColor(color.color)}
                                            >
                                            </button>
                                        ))}
                                    </div>

                                </div>

                                <button className="w-full md:w-2/4 font-medium text-xl bg-warning hover:bg-amber-500 text-white py-3 rounded-md hover:scale-105 transition-all duration-200">Comprar</button>
                            </div>

                        </div>

                    </div>

                    <Section className="w-full pt-10 pb-5 px-2 box-border" title="Produtos em alta" link={{text:"Ver todos", href:"hhttp://localhost:5173/products"}}>
                        <div className="hidden md:flex">
                            <ProductListing len={4} />
                        </div>
                        <div className="md:hidden">
                            <ProductListing len={2} />
                        </div>
                    </Section>

                </div>

            </div>z

        </Layout>
    );
}
