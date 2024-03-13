// react
import React from 'react'
import { FcGlobe } from "react-icons/fc"

// assets
import energyImg from "../assets/energy.png"
import novaImg from "../assets/novaenergy.webp"

// router
import { Link } from 'react-router-dom';

// data
import {homeHeroData,
        links } from '../utils/utils';


const Hero = () => {
  
    return (
        <>
        {/* Hero Section */}
        <div className="p-10">

            {/* Moving Websites */}
            <div className="bg-gray-50 border border-black shadow-lg dark:bg-black dark:border-green-400">
                <div className="md:flex items-center text-left p-16 justify-between w-full bg-gray-50 dark:bg-black">
                    <div className="xl:w-1/2 md:w-1/2 w-full mb-10">
                        <h1 className="focus:outline-none font-bold md:text-4xl text-3xl text-gray-800 dark:text-green-500">
                            <span className="font-bold italic inline">{homeHeroData.title[2]}</span>
                        </h1>
                        <p className="focus:outline-none text-xs leading-6 mt-8 text-gray-600 2xl:pr-24 xl:pr-0 pr-12 dark:text-gray-50">
                            {homeHeroData.description[2]}
                        </p>
                        <p className="text-xs mt-14 p-2 text-black w-3/4 border border-green-400 rounded-lg bg-green-100">
                            {homeHeroData.description[3]}
                        </p>
                        <div className="mt-8">
                            <Link to={links.new_website}>
                                <button className="flex items-center p-3 text-sm text-start font-medium leading-5 text-white bg-black border border-green-300 shadow-md dark:border-white dark:text-white focus:bg-green-500 hover:bg-green-500 duration-150">
                                    {homeHeroData.description[1]}
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="xl:w-4/6 md:w-1/2 w-full xl:pl-48">
                        <div className="w-full">
                            <img src={novaImg} alt="Green Img" className="md:w-full sm:w-1/2 w-full" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Audit Requirements */}
            <div className="mt-10 border border-black p-10 bg-gray-50 shadow-lg dark:bg-black dark:border-green-400">
                <div className="text-center">
                    <div className="mt-5 flex justify-center">
                        <h1 className="focus:outline-none md:w-90 font-bold md:text-2xl text-2xl text-black dark:text-green-500">
                            {homeHeroData.audit_requirements.title}
                        </h1>
                    </div>
                    <div className="mt-5 flex justify-center">
                        <h1 className="focus:outline-none md:w-150 md:text-md text-small text-gray-800 dark:text-blue-300">
                            {homeHeroData.audit_requirements.description}
                        </h1>
                    </div>
                </div>

                {/* Audit Requirements */}
                <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 flex-wrap justify-center text-center">
                    {homeHeroData.audit_requirements.requirements.map((requirements, index) => (
                        <div key={index} className="flex flex-wrap p-8 shadow-md border rounded-lg border-white bg-white dark:bg-gray-800 dark:border-gray-400 dark:border-2">
                            <div>
                                <p className="font-semibold lg:text-xl text-lg lg:leading-6 leading-4 text-gray-800 dark:text-white">{requirements.title}</p>
                                <p className="font-normal text-sm leading-6 text-gray-600 mt-6 dark:text-white">{requirements.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Summary: */}
            <div className="mt-10 bg-gray-50 border border-black shadow-lg dark:bg-black dark:border-green-400">
                <div className="md:flex items-center text-left p-16 justify-between w-full bg-gray-50 dark:bg-black">
                    <div className="xl:w-1/2 md:w-1/2 w-full mb-10">
                        <h1 className="focus:outline-none md:w-60 font-bold md:text-4xl text-3xl leading-tight text-gray-800 dark:text-green-500">
                            {homeHeroData.title[0]}<span className="font-normal italic inline">{homeHeroData.title[1]}</span>
                        </h1>
                        <p className="focus:outline-none text-small leading-6 mt-8 text-gray-600 2xl:pr-24 xl:pr-0 pr-12 dark:text-gray-50">
                            {homeHeroData.description[0]}
                        </p>
                        <div className="mt-20">
                            <Link to={links.sustainability_tiers}>
                                <button className="flex items-center p-4 text-sm text-start font-medium leading-5 text-white bg-black border border-green-300 shadow-md dark:border-white dark:text-white focus:bg-green-500 hover:bg-green-500 duration-150">
                                   
                                    <FcGlobe className="mr-2 w-6 h-6"/>
                                    {homeHeroData.description[1]}
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="xl:w-4/6 md:w-1/2 w-full xl:pl-48">
                        <div className="w-full">
                            <img src={energyImg} alt="Green Img" className="md:w-full sm:w-1/2 w-full" />
                        </div>
                    </div>
                </div>
            </div>
        {/* End of View:  */}
        </div>
    </>
  )
}

export default Hero
