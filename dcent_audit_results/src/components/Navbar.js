// react
import React,{useState} from "react";

// assets
import logo from '../assets/logo.png'

// navigation
import { Link, useNavigate } from "react-router-dom";

// data
import { navbarData } from "../utils/utils";

const Navbar = () => {

    // Collapsed menu hook:
    const [show, setshow] = useState(false);

    // Navigation hook: 
    const navigate = useNavigate(); 

    return (
        <div className="bg-black shadow-xl w-full sticky top-0 z-50">
            <nav className="2xl:container 2xl:mx-auto sm:py-6 sm:px-7 py-5 px-4 border-b border-black">
                {/* For large and Medium-sized Screens */}
                <div className="flex justify-between">
                    <div className=" flex space-x-3 items-center">
                        <img onClick={() => navigate("/")} src={logo} className="h-12 mr-3 sm:h-12 border-green-500 border-2 shadow-lg" alt="Filecoin Green Logo"></img>
                        <h1 className=" font-bold xl:text-2xl lg:text-xl md:text-md sm:text-sm leading-6 text-white">{navbarData.title}</h1>
                    </div>
                    <div className="hidden sm:flex flex flex-row space-x-4 items-center">
                        <button onClick={() => navigate("/")} className="flex space-x-2 w-40 h-10 font-semibold text-xs leading-3 text-green-400 bg-black border-2 border-green-400 focus:outline-none focus:bg-white focus:text-black duration-150 justify-center items-center">
                            {navbarData.audit_overview_btn_txt}
                        </button>
                        <button onClick={() => navigate("/findings")} className="flex space-x-2 w-40 h-10 font-semibold text-xs leading-3 text-green-400 bg-black border-2 border-green-400 focus:outline-none focus:bg-white focus:text-black duration-150 justify-center items-center">
                            {navbarData.detailed_findings_btn_txt}
                        </button>
                        <button className="flex space-x-2 w-40 h-10 font-semibold text-xs leading-3 text-black bg-green-400 border border-green-400 focus:outline-none focus:bg-white focus:text-black duration-150 justify-center items-center">
                            <Link to="https://filecoin-green.gitbook.io/filecoin-green-documentation/readme-1/storage-providers-tiered-sustainability-claims">
                                {navbarData.learn_more_btn_txt}
                            </Link>
                        </button>
                    </div>
                    {/* Burger Icon */}
                    <div id="bgIcon" onClick={() => setshow(!show)} className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 justify-center items-center sm:hidden cursor-pointer`}>
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
                {/* Mobile and small-screen devices (toggle Menu) */}
                <div id="MobileNavigation" className={`${show ? 'block' : 'hidden'} sm:hidden mt-4 mx-auto`}>
                    <div className="flex flex-col gap-4 mt-10 w-80 mx-auto ">
                        <button onClick={() => navigate("/")} className="flex space-x-2 w-full h-10 font-semibold text-sm leading-3 text-white bg-black border border-white focus:outline-none focus:bg-green-500 hover:bg-green-500 duration-150 justify-center items-center">
                            {navbarData.audit_overview_btn_txt}
                        </button>
                        <button onClick={() => navigate("/findings")} className="flex space-x-2 w-full h-10 font-semibold text-sm leading-3 text-white bg-black border border-white focus:outline-none focus:bg-green-500 hover:bg-green-500 duration-150 justify-center items-center">
                            {navbarData.detailed_findings_btn_txt}
                        </button>
                        <button className="flex space-x-2 w-full h-10 font-semibold text-sm leading-3 text-white bg-black border border-white focus:outline-none focus:bg-green-500 hover:bg-green-500 duration-150 justify-center items-center">
                            <Link to="https://filecoin-green.gitbook.io/filecoin-green-documentation/readme-1/storage-providers-tiered-sustainability-claims">
                                {navbarData.learn_more_btn_txt}
                            </Link>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar
