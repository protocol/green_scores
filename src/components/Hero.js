// react
import React from 'react'
import { FcGlobe } from "react-icons/fc"

// assets
import energyImg from "../assets/energy.png"

// router
import { Link } from 'react-router-dom';

// data
import {homeHeroData,
        links } from '../utils/utils';

// report
import DCENT_Report from "../assets/DCENT_Finding Summary_12Dec2022.pdf"

const Hero = () => {
  
    return (
        <>
        {/* Hero Section */}
        <div className="2xl:container 2xl:mx-auto 2xl:mt-0 lg:py-16 lg:px-20 lg:mt-0 md:py-12 md:px-6 sm:mt-0 py-9 px-4">

            {/* Summary: */}
            <div className="py-20 2xl:px-0 lg:px-12 px-4 2xl:mx-auto 2xl:container bg-gray-50 border border-black shadow-lg dark:bg-black dark:border-green-400">
                <div className="md:flex items-center text-left p-16 justify-between w-full bg-gray-50 dark:bg-black">
                    <div className="xl:w-1/3 md:w-1/2 w-full mb-10">
                        <h1 className="focus:outline-none md:w-60 font-bold md:text-6xl text-4xl leading-tight text-gray-800 dark:text-green-500">
                            {homeHeroData.title[0]}<span className="font-normal italic inline">{homeHeroData.title[1]}</span>
                        </h1>
                        <p role="contentinfo" className="focus:outline-none text-base leading-6 mt-8 text-gray-600 2xl:pr-24 xl:pr-0 pr-12 dark:text-gray-50">
                            {homeHeroData.description[0]}
                        </p>
                        <div className="mt-10">
                            <Link to={links.sustainability_tiers}>
                                <button className="flex items-center focus:outline-none text-xl text-start font-medium leading-5 text-black dark:text-green-500">
                                   
                                    <FcGlobe className="mr-5 w-10 h-10"/>
                                    {homeHeroData.description[1]}
                                </button>
                            </Link>
                        </div>
                        <a href={DCENT_Report} download="DCENTReport" target='_' className='md:w-60 sm:w-1/2 w-60 mt-12 flex px-8 py-4 bg-black hover:bg-green-500 text-md font-semibold leading-none text-center items-center justify-center text-white dark:bg-green-500 dark:text-black'>
                            {homeHeroData.recommendations_txt[2]}
                        </a>
                    </div>
                    <div className="xl:w-4/6 md:w-1/2 w-full xl:pl-48">
                        <div className="w-full">
                            <img src={energyImg} alt="Green Img" className="md:w-full sm:w-1/2 w-full" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Audit Requirements */}
            <div className="mt-10 border border-black p-10 bg-gray-50 shadow-lg dark:bg-black dark:border-green-400">
                <div className="text-center">
                    <div className="mt-5 flex justify-center">
                        <h1 className="focus:outline-none md:w-90 font-bold md:text-3xl text-2xl text-black dark:text-green-500">
                            {homeHeroData.audit_requirements.title}
                        </h1>
                    </div>
                    <div className="mt-5 flex justify-center">
                        <h1 className="focus:outline-none md:w-150 md:text-lg text-md text-gray-800 dark:text-blue-300">
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
        {/* End of View:  */}
        </div>
    </>
  )
}

export default Hero
