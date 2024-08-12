import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Layout from "./Layout";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

import blue from "../assets/products/nike-blue.png";
import black from "../assets/products/nike-black.png";
import green from "../assets/products/nike-green.png";
import BuyBox from "../components/BuyBox";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import { Link } from "react-router-dom";

export default function ProductViewPage() {

    const [selectedImage, setSelectedImage] = useState(blue);
    const [selectedClass, setSelectedClass] = useState("bg-blue-100");

    const nikeThumbs = [
        { id: 1, image: blue, className: "bg-blue-100" },
        { id: 2, image: black, className: "bg-amber-100" },
        { id: 3, image: green, className: "bg-green-100" },
    ];

    const size = ["39", "40", "41", "42"];

    const color = [
        { id: 1, color: "bg-blue-500" },
        { id: 2, color: "bg-red-500" },
        { id: 3, color: "bg-yellow-500" },
        { id: 4, color: "bg-purple-500" }
    ];

    const handleClick = () => window.scrollTo(0, 0);
    
    const handleThumbnailClick = (image: string, className: string) => {
        setSelectedImage(image);      
        setSelectedClass(className); 
    };

    return (
        <Layout>
            <div className="py-10 pt-20 md:pt-5 flex flex-col justify-center items-center gap-5 bg-light-gray-3 md:px-10">
                <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                    <div>
                        <Link to="/products">
                            <h3 className="py-3 pb-5 text-md font-medium text-dark-gray-2">
                                Home / Produtos / Tênis / Nike / <br className="md:hidden" />
                                <span>Tênis Nike Revolution 6 Next Nature Masculino</span>
                            </h3>
                        </Link>

                        <div>
                            <div className="mb-5">
                                <Swiper
                                    slidesPerView={1}
                                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                                    pagination={{ clickable: true }}
                                    navigation
                                    className="h-[40vh] w-[90vw] md:h-[50vh] md:w-[50vw] transition-all duration-200"
                                >
                                    <SwiperSlide>
                                        <img src={selectedImage} alt="Nike product" className={`${selectedClass} p-5 object-cover w-full m-auto rounded-md px-20 sm:px-48 md:px-20 lg:px-48`} />
                                    </SwiperSlide>
                                </Swiper>
                            </div>

                            <div className="flex justify-center mb-5">
                                {nikeThumbs.map((item) => (
                                    <img 
                                        key={item.id} 
                                        src={item.image} 
                                        alt="Nike thumbnail" 
                                        className={`w-[110px] p-2 h-[95px] object-cover rounded-md mx-1 cursor-pointer ${item.className} ${selectedImage === item.image ? 'border-4 border-primary' : ''}`} 
                                        onClick={() => handleThumbnailClick(item.image, item.className)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="px-5 md:px-0">
                        <BuyBox 
                            name="Tênis Nike Revolution 6 Next Nature Masculino" 
                            reference="Casual | Nike | REF: DD84769111"
                            stars={4}
                            rating={90}
                            price={219.00}
                            priceDiscount={249.99}
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sea aut consectetur, modi iste quod delectus veritatis quae deserunt aspernatur eius ad autem ipsum excepturi obcaecati."
                            sizes={size}
                            colors={color}
                        />
                    </div>
                </div>

                <div onClick={handleClick}>
                    <Section className="w-full pt-10 pb-5 px-2 box-border" title="Produtos em alta" link={{ text: "Ver todos" }}>
                        <div className="hidden md:flex">
                            <ProductListing len={4} />
                        </div>
                        <div className="md:hidden">
                            <ProductListing len={2} />
                        </div>
                    </Section>
                </div>
            </div>
        </Layout>
    );
}
