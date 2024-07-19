import { useState } from "react";

import Nav from "./Nav";
import Menu from "./Menu";
import Logo from "./Logo";

import cart from "../assets/icons/mini-cart.svg";

import Button from "./Button";

import { CiSearch  } from "react-icons/ci";


export default function Header() {

    const [ open, setOpen ] = useState(false);
    const [ openSearch, setOpenSearch ] = useState(false);

    const handleOpenMenu = () => {
        setOpen(!open);
        setOpenSearch(false)
    }

    const handleOpenSearch = () => {
        setOpen(false);
        setOpenSearch(!openSearch)
    }

    const handleEntrar = () => console.log("Login");

    return (

        <header className="py-5 md:flex-col ">
            
            <div className="flex justify-around items-center">

                <Menu onClick={handleOpenMenu} />

                <Logo type="logoHeader" />

                <div className="w-[35vw] hidden lg:flex items-center justify-around bg-neutral-200/80 rounded-md md:block">
                    <input 
                        id="search" 
                        type="text" 
                        placeholder="Pesquisar por produtos..." 
                        className="p-2 w-full outline-none bg-transparent focus:border-pink-600 focus:ring-pink-600 focus:ring-2 rounded-md" 
                    />
                    
                    <CiSearch size={'18px'} color="#c8c8c8" className="absolute sm:top-7 sm:left-[60vw] md:left-[58vw] md:top-8 lg:left-[63vw] lg:top-9" />

                </div>

                <div className="md:flex md:items-center gap-5 hidden">

                    <a className="lg:text-lg md:text-sm underline underline-offset-4 hover:text-primary hover:font-medium hover:transition-colors hover:scale-105 ease-out" href="https://google.com">Cadastre-se</a>

                    <Button type="submit" text="Entrar" onClick={handleEntrar} />

                </div>

                <div className="flex items-center justify-around gap-1">
                    
                <CiSearch  color="#c8c8c8" className="h-auto w-6 md:hidden" onClick={handleOpenSearch} />

                    <div className="flex flex-col md:hidden">

                        {
                            openSearch &&
                                <div className="flex w-screen absolute sm:p-5 top-16 left-0 p-1">
                                    <input 
                                        id="pesquisar" 
                                        type="text" 
                                        placeholder="Pesquisar por produto... " 
                                        className="p-2 w-full rounded-md bg-neutral-200 outline-none focus:border-pink-600 focus:ring-pink-600 focus:ring-2"
                                    />
                                    
                                    <CiSearch  color="#c8c8c8" className="h-auto w-8 absolute top-3 sm:top-7 left-[90vw]"/>

                                </div>
                        }

                    </div>

                    <img src={cart} alt="Icon Cart" className="h-auto w-6" />

                </div>

            </div>

            <Nav className="hidden md:block" />
            
            {
                open && 
                    <Nav className="md:hidden"/>
            }

        </header>

    );
}
