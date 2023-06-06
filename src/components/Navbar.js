// react
import React, {useState} from "react";
import {RiMoonClearFill, RiSunFill} from 'react-icons/ri'

// assets
import logo from '../assets/logo.png'

// navigation
import { Link, useNavigate } from "react-router-dom";

// data
import { navbarData } from "../utils/utils";

// framer
import { motion } from "framer-motion"

const Navbar = () => {

    // Collapsed menu hook:
    const [show, setshow] = useState(false);

    // Navigation hook: 
    const navigate = useNavigate(); 

    // Theme switch hook: 
    const [isOn, setIsOn] = useState(() => {
        if(localStorage.getItem('theme') === 'light'){
            return true;
        } else {
            return false;
        }
    });

    // Theme switch:
    const toggleTheme = () => setIsOn(!isOn);

    // Transition animations: 
    const spring = {
        type: 'spring',
        stiffness: 700,
        damping: 30,
    };

    // Sets the theme:
    if (isOn) {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
    } else {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
    }
  
    if (
        localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)
    ) { document.documentElement.classList.add('dark') } 
    else {
        document.documentElement.classList.remove('dark')
    }
  
    return (
        <div className="bg-black shadow-xl w-full sticky top-0 z-50 dark:border-green-500 dark:border-b">
            <nav className="ml-4 mr-4 py-4 px-4 border-b border-black">
                {/* For large and Medium-sized Screens */}
                <div className="flex justify-between">
                    <div className=" flex space-x-4 items-center">
                        <img onClick={() => navigate("/")} src={logo} className="h-12 mr-3 sm:h-12 border-green-500 border-2 shadow-lg hover:cursor-pointer" alt="Filecoin Green Logo"></img>
                        <h1 className="line-clamp-1 font-bold xl:text-xl lg:text-lg md:text-md sm:text-sm leading-6 text-white">{navbarData.title}</h1>
                    </div>
                    <div className="hidden sm:flex flex flex-row space-x-3 items-center">
                        {/* Btn: Audit Overview */}
                        <button onClick={() => navigate("/")} className="text-center break-normal flex px-2 py-2 font-semibold text-xs text-white bg-black border border-white focus:outline-none focus:bg-green-500 hover:bg-green-500 duration-150 justify-center items-center">
                            <p className="line-clamp-1 ">
                                {navbarData.home_btn_txt}
                            </p>
                        </button>

                        {/* Btn: Search */}
                        <button onClick={() => navigate("/search")} className="text-center break-normal flex px-2 py-2 font-semibold text-xs text-white bg-black border border-white focus:outline-none focus:bg-green-500 hover:bg-green-500 duration-150 justify-center items-center">
                            <p className="line-clamp-1 ">
                                {navbarData.search_btn_txt}
                            </p>
                        </button>

                        {/* Btn: EVP Results */}
                        <button onClick={() => navigate("/auditoutputs")} className="text-center break-normal flex px-2 py-2 font-semibold text-xs text-white bg-black border border-white focus:outline-none focus:bg-green-500 hover:bg-green-500 duration-150 justify-center items-center">
                            <p className="line-clamp-1 ">
                                {navbarData.evp_results_btn_txt}
                            </p>
                        </button>

                        {/* Btn: Validators */}
                        <button onClick={() => navigate("/validators")} className="text-center break-normal flex px-2 py-2 font-semibold text-xs text-white bg-black border border-white focus:outline-none focus:bg-green-500 hover:bg-green-500 duration-150 justify-center items-center">
                            <p className="line-clamp-1 ">
                                {navbarData.validators_btn_txt}
                            </p>
                        </button>

                        {/* Theme switch */}
                        <div onClick={toggleTheme} className={`flex h-[30px] w-[60px] rounded-[50px] bg-zinc-100 p-[2.5px] shadow-inner hover:cursor-pointer dark:bg-zinc-700 ${ isOn && 'place-content-end'}`}>
                            <motion.div 
                                className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-black/90"
                                layout
                                transition={spring}
                            >
                                <motion.div whileTap={{rotate: 360}}>
                                {isOn ? (<RiMoonClearFill className="h-4 w-4 text-slate-200" />) : (<RiSunFill className="h-4 w-4 text-yellow-300" />)}
                            </motion.div>
                            </motion.div>    
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center sm:hidden space-x-3">
                        {/* Theme switch */}
                        <div onClick= {toggleTheme}
                            className={`flex h-[30px] w-[60px] rounded-[50px] bg-zinc-100 p-[2.5px] shadow-inner hover:cursor-pointer dark:bg-zinc-700 ${ isOn && 'place-content-end'}`}>
                            <motion.div 
                                className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-black/90"
                                layout
                                transition={spring}
                            >
                                <motion.div whileTap={{rotate: 360}}>
                                {isOn ? (<RiMoonClearFill className="h-4 w-4 text-slate-200" />) : (<RiSunFill className="h-4 w-4 text-yellow-300" />)}
                            </motion.div>
                            </motion.div>    
                        </div>
                    
                        {/* Burger Icon */}
                        <div id="bgIcon" onClick={() => setshow(!show)} className={`flex flex-row focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 justify-center items-center sm:hidden cursor-pointer`}>
                            <div className="bg-green-500 p-1 border border-white shadow-lg items-center">
                                <svg className={`${show ? 'hidden' : ''}`} width={24} height={24} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path className=" transform duration-150" d="M4 6H20" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4 12H20" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path className=" transform duration-150" d="M4 18H20" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <svg className={`${show ? 'block' : 'hidden'}`} width={24} height={24} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 6L18 18" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile and small-screen devices (toggle Menu) */}
                <div id="MobileNavigation" className={`${show ? 'block' : 'hidden'} sm:hidden md:hidden mt-4 mx-auto`}>
                    <div className="flex flex-col gap-4 mt-10 w-80 mx-auto ">
                        <button onClick={() => navigate("/")} className="flex space-x-2 w-full h-10 font-semibold text-sm leading-3 text-white bg-black border border-white focus:outline-none focus:bg-green-500 hover:bg-green-500 duration-150 justify-center items-center">
                            {navbarData.home_btn_txt}
                        </button>
                        <button onClick={() => navigate("/auditoutputs")} className="flex space-x-2 w-full h-10 font-semibold text-sm leading-3 text-white bg-black border border-white focus:outline-none focus:bg-green-500 hover:bg-green-500 duration-150 justify-center items-center">
                            {navbarData.evp_results_btn_txt}
                        </button>
                        <button onClick={() => navigate("/search")} className="flex space-x-2 w-full h-10 font-semibold text-sm leading-3 text-white bg-black border border-white focus:outline-none focus:bg-green-500 hover:bg-green-500 duration-150 justify-center items-center">
                            {navbarData.search_btn_txt}
                        </button>
                        <button onClick={() => navigate("/validators")} className="flex space-x-2 w-full h-10 font-semibold text-sm leading-3 text-white bg-black border border-white focus:outline-none focus:bg-green-500 hover:bg-green-500 duration-150 justify-center items-center">
                            {navbarData.validators_btn_txt}
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar
