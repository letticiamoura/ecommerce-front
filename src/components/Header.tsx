import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import Nav from "./Nav";
import Menu from "./Menu";
import Logo from "./Logo";
import Button from "./Button";
import cart from "../assets/icons/mini-cart.svg";
import nikeG from "../assets/products/nike-yellow.png";
import CartCard from "./CartCard";

export default function Header() {

  const [open, setOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  
  const navigate = useNavigate();

  const handleOpenMenu = () => {
    setOpen(!open);
    setOpenSearch(false);
  };

  const handleOpenSearch = () => {
    setOpen(false);
    setOpenSearch(!openSearch);
  };
  
  const handleEntrar = () => navigate("/ecommerce-front/login");
  const handleRegister = () => navigate("/ecommerce-front/register")

  // Pop Up do carrinho
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleMouseEnter = () => setIsPopupVisible(true);
  const handleMouseLeave = () => setIsPopupVisible(false);

  return (
    <header className="py-5 md:flex-col bg-white fixed md:relative w-full z-50 top-0 shadow-md md:shadow-none">
      <div className="flex justify-between items-center px-5">
        <Menu onClick={handleOpenMenu} />
        <Logo type="logoHeader" />

        <div className="hidden md:flex items-center justify-around bg-neutral-200/80 rounded-md w-1/2">
          <div className="flex items-center w-full">
            <input
              id="search"
              type="text"
              placeholder="Pesquisar por produtos..."
              className="p-2 w-full outline-none bg-transparent focus:border-pink-600 focus:ring-pink-600 focus:ring-2 rounded-md"
            />
            <div className="relative mx-2">
              <CiSearch size="18px" color="#c8c8c8" className="absolute top-1/2 transform -translate-y-1/2 right-0 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="hidden md:flex md:items-center gap-5">
          <button
            className="lg:text-lg md:text-sm underline underline-offset-4 hover:text-primary hover:font-medium hover:transition-colors hover:scale-105 ease-out"
            onClick={handleRegister}
          >
            Cadastre-se
          </button>
          <Button type="submit" text="Entrar" onClick={handleEntrar} />
        </div>

        <div className="flex items-center justify-around gap-1">
          <CiSearch
            color="#c8c8c8"
            className="h-auto w-6 md:hidden"
            onClick={handleOpenSearch}
          />
          <div className="flex flex-col md:hidden">
            {openSearch && (
              <div className="flex w-screen absolute p-2 top-16 left-0 bg-white shadow-lg z-50">
                <input
                  id="pesquisar"
                  type="text"
                  placeholder="Pesquisar por produto..."
                  className="p-2 w-full rounded-md bg-neutral-200 outline-none focus:border-pink-600 focus:ring-pink-600 focus:ring-2"
                />
                <CiSearch color="#c8c8c8" className="h-auto w-8 absolute top-3 left-[90vw]" />
              </div>
            )}
          </div>
          <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <NavLink to="/ecommerce-front/cart">
              <img src={cart} alt="Icon Cart" className="h-auto w-6" />
            </NavLink>
            {isPopupVisible && (
              <div className="flex flex-col absolute right-1 w-[315px] mt-1 px-5 py-8 z-50 bg-white shadow-lg">
                <h1 className="font-bold text-base text-dark-gray-2">Meu Carrinho</h1>
                <hr className='my-5 bg-light-gray-2'></hr>
                <CartCard 
                    className="flex flex-row"
                    image={nikeG} 
                    title="K-swiss V8 - Masculino" 
                    quantity={2}
                    price={219.00}
                    total={219.00}
                />
                <div className="flex justify-between items-center pt-5">
                  <a href="" className='text-sm font-medium text-dark-gray-2 underline'>Esvaziar</a>
                  <NavLink to="/ecommerce-front/cart" className="p-2 rounded-xl bg-primary text-white hover:scale-105 hover:cursor-pointer hover:bg-pink-500 transition-colors">Ver Carrinho</NavLink>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Nav className="hidden md:block" />
      {open && (
        <>
          <div
            className="fixed top-[10%] inset-0 z-40 bg-black bg-opacity-50  md:hidden"
            onClick={handleOpenMenu}
          ></div>
          <Nav className="fixed overflow-scroll z-50 bg-white w-3/4 h-full p-5 top-[9.2%] left-0 shadow-lg md:hidden" />
        </>
      )}
    </header>
  );
}
