// react
import React from 'react'
import { FcGlobe } from "react-icons/fc"

// assets
import energyImg from "../assets/energy.png"

// router
import { Link } from 'react-router-dom';

// data
import { audit_outputs } from '../utils/FindingsTable';
import {homeHeroData,
        links } from '../utils/utils';

// report
import DCENT_Report from "../assets/DCENT_Finding Summary_12Dec2022.pdf"

const Hero = () => {
  
    return (
        <>
        {/* Hero Section */}
        <div className="p-10">

            {/* Summary: */}
            <div className="2xl:px-0 lg:px-12 px-4 2xl:mx-auto 2xl:container bg-gray-50 border border-black shadow-lg dark:bg-black dark:border-green-400">
                <div className="md:flex items-center text-left p-16 justify-between w-full bg-gray-50 dark:bg-black">
                    <div className="xl:w-1/3 md:w-1/2 w-full mb-10">
                        <h1 className="focus:outline-none md:w-60 font-bold md:text-5xl text-3xl leading-tight text-gray-800 dark:text-green-500">
                            {homeHeroData.title[0]}<span className="font-normal italic inline">{homeHeroData.title[1]}</span>
                        </h1>
                        <p className="focus:outline-none text-base leading-6 mt-8 text-gray-600 2xl:pr-24 xl:pr-0 pr-12 dark:text-gray-50">
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
                        <a href={"https://greenscores.xyz/auditoutputs"} className='md:w-60 sm:w-1/2 w-60 mt-12 flex px-8 py-4 bg-black hover:bg-green-500 text-md font-semibold leading-none text-center items-center justify-center text-white dark:bg-green-500 dark:text-black'>
                            View EVP Results
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

            {/* DCents - Green Score  */}
            <div className="p-10 mt-10 shadow-lg bg-gradient-to-r from-green-200 via-grey-100 to-blue-200 border border border-black">
                <div className="flex justify-center text-center">
                    <h1 className="focus:outline-none md:w-90 font-bold md:text-2xl text-xl text-black">
                        {homeHeroData.dcent_green_score}
                    </h1>
                </div>
            </div>

            {/* Findings Summary */}
            <div className="mt-10 py-10 bg-gray-50 border border-black shadow-lg dark:bg-black dark:border-green-400">
                <div className="container mx-auto px-10 flex lg:items-center justify-between lg:flex-col md:flex-col flex-col">
                    {/* Title & disclaimer: */}
                    <div className="flex justify-center">
                        <h1 className="focus:outline-none md:w-90 font-bold md:text-3xl text-2xl text-black dark:text-green-500">
                            {homeHeroData.findings_summary_txt[0]}
                        </h1>
                    </div>
                    <div className="mt-10 mb-5 p-5 flex justify-center bg-red-100 shadow-md border-2 border-red-300 w-full">
                        <h1 className="md:text-sm sm:text-center text-sm text-start text-black italic">
                            {homeHeroData.findings_summary_txt[1]}
                        </h1>
                    </div>

                    {/* Findings */}
                    <div role="list" className="text-left grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 flex-wrap justify-center items-start">
                       {audit_outputs.findings_summary.map((findings) => {
                            const {title, description} = findings;

                            return (
                                <div key={title} role="listitem" className="bg-white shadow-md border border-white p-4 xl:p-4 dark:bg-gray-800 dark:border-gray-400 dark:border-2">
                                    <div className="pl-4 pt-4 flex items-start justify-between">
                                        <div className="mr-6">
                                            <p className="mb-4 text-base font-semibold leading-none text-gray-800 dark:text-white">{title}</p>
                                            <p className="xl:text-base xl:leading-loose text-base text-gray-600 dark:text-gray-400">{description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Recommendations:  */}
            <div className="mt-10 py-16 bg-gray-50 border border-black shadow-lg dark:bg-black dark:border-green-400">
                <div className="container mx-auto px-10 flex flex-col lg:items-center justify-between lg:flex-row">
                    <div className="mb-14 xl:mb-0 xl:text-start xl:w-1/2">
                        <h1 className="text-2xl leading-tight md:text-4xl xl:text-5xl font-semibold leading-10  text-gray-800 xl:w-2/3 pr-16 lg:pr-0 dark:text-green-500">
                            {homeHeroData.recommendations_txt[0]}
                        </h1>
                        <p className="mt-10 text-base leading-normal text-gray-600 md:w-2/3 lg:w-3/4 pr-16 lg:pr-0 italic dark:text-white">
                            {homeHeroData.recommendations_txt[1]}
                        </p>
                        <button className="hidden md:block w-full sm:w-auto mt-12 focus:outline-none focus:ring-2 focus:ring-green-700 flex items-start justify-center sm:justify-start px-8 py-4 bg-black hover:bg-green-500 text-base font-medium leading-none text-center text-white dark:bg-green-500 dark:text-black">
                            <a href={DCENT_Report} download="DCENTReport" target='_'>
                                {homeHeroData.recommendations_txt[2]}
                            </a>
                        </button>
                    </div>
                    <div role="list" className="text-left xl:w-3/4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 flex-wrap justify-center items-start">
                       {audit_outputs.recommendations.map((recommendations) => {
                            const {title, description} = recommendations;

                            return (
                                <div key={title} role="listitem" className="bg-white shadow-md border border-white rounded p-4 xl:p-4 dark:bg-gray-800">
                                    <div className="pl-4 pt-4 flex items-start justify-between">
                                        <div className="mr-6">
                                            <p className="mb-4 text-base font-semibold leading-none text-gray-800 dark:text-white">{title}</p>
                                            <p className="xl:text-base xl:leading-loose text-base text-gray-600 dark:text-gray-400">{description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        <button className="md:hidden w-full sm:w-auto mt-4 focus:outline-none flex items-start justify-center sm:justify-start px-8 py-4 bg-black hover:bg-green-600 rounded text-base font-semibold leading-none text-center text-white dark:bg-green-500 dark:text-black">
                            <a href={DCENT_Report} download="DCENTReport" target='_'>
                                {homeHeroData.recommendations_txt[2]}
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        {/* End of View:  */}
        </div>
    </>
  )
}

export default Hero
