// react
import React from 'react'

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
        <div className="2xl:container 2xl:mx-auto 2xl:mt-0 lg:py-16 lg:px-20 lg:mt-0 md:py-12 md:px-6 sm:mt-0 py-9 px-4">
            <div className="py-20 2xl:px-0 lg:px-12 px-4 2xl:mx-auto 2xl:container bg-gray-50 border border-black shadow-lg">
                <div className="md:flex items-center text-left p-16 justify-between w-full bg-gray-50">
                    <div className="xl:w-1/3 md:w-1/2 w-full mb-10">
                        <h1 className="focus:outline-none md:w-60 font-bold md:text-6xl text-4xl leading-tight text-gray-800">
                            {homeHeroData.title[0]}<span className="font-normal italic inline">{homeHeroData.title[1]}</span>
                        </h1>
                        <p role="contentinfo" className="focus:outline-none text-base leading-6 mt-8 text-gray-600 2xl:pr-24 xl:pr-0 pr-12">
                            {homeHeroData.description[0]}
                        </p>
                        <div className="mt-10">
                            <Link to={links.sustainability_tiers}>
                                <button className="flex items-center focus:outline-none text-xl text-start font-medium leading-5 text-black">
                                    {homeHeroData.description[1]}
                                    <svg className="ml-8" width={45} height={40} viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.2113 33.7887C11.0161 33.9839 11.0157 34.3009 11.2157 34.4911C13.956 37.0978 17.3821 38.8765 21.0982 39.6157C24.9778 40.3874 28.9991 39.9913 32.6537 38.4776C36.3082 36.9638 39.4318 34.4004 41.6294 31.1114C43.827 27.8224 45 23.9556 45 20C45 16.0444 43.827 12.1776 41.6294 8.8886C39.4318 5.59961 36.3082 3.03616 32.6537 1.52241C28.9991 0.00865715 24.9778 -0.38741 21.0982 0.384294C17.3821 1.12346 13.956 2.90221 11.2157 5.50886C11.0157 5.69911 11.0161 6.01609 11.2113 6.21127C11.4065 6.40645 11.7225 6.4059 11.9227 6.21592C14.523 3.74892 17.7711 2.06527 21.2932 1.36468C24.9789 0.631541 28.7993 1.00781 32.2711 2.44591C35.743 3.88401 38.7105 6.31934 40.7983 9.44394C42.8861 12.5685 44.0004 16.2421 44.0004 20C44.0004 23.7579 42.8861 27.4315 40.7983 30.5561C38.7105 33.6807 35.743 36.116 32.2711 37.5541C28.7993 38.9922 24.9789 39.3685 21.2932 38.6353C17.7711 37.9347 14.523 36.2511 11.9227 33.7841C11.7225 33.5941 11.4065 33.5935 11.2113 33.7887Z"
                                            fill="#1F2937"
                                        />
                                        <path d="M1 20H29" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M21 28L29 20" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M21 12L29 20" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </Link>
                        </div>
                        <a href={DCENT_Report} download="DCENTReport" target='_' className='md:w-60 sm:w-1/2 w-60 mt-12 flex px-8 py-4 bg-black hover:bg-green-500 text-md font-semibold leading-none text-center items-center justify-center text-white'>
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

            <div className="mt-10 border border-black p-10 bg-gray-50 shadow-lg">
                <div className="text-center">
                    <div className="mt-5 flex justify-center">
                        <h1 className="focus:outline-none md:w-90 font-bold md:text-3xl text-2xl text-black">
                            {homeHeroData.audit_requirements.title}
                        </h1>
                    </div>
                    <div className="mt-5 flex justify-center">
                        <h1 className="focus:outline-none md:w-150 md:text-lg text-md text-gray-800">
                            {homeHeroData.audit_requirements.description}
                        </h1>
                    </div>
                </div>

                {/* Audit Requirements */}
                <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 flex-wrap justify-center text-center">
                    {homeHeroData.audit_requirements.requirements.map((requirements, index) => (
                        <div key={index} className="flex flex-wrap p-8 shadow-md border rounded-lg border-white bg-white">
                            <div>
                                <p className="font-semibold lg:text-xl text-lg lg:leading-6 leading-4 text-gray-800">{requirements.title}</p>
                                <p className="font-normal text-sm leading-6 text-gray-600 mt-6">{requirements.description}</p>
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
            <div className="mt-10 py-10 bg-gray-50 border border-black shadow-lg">
                <div className="container mx-auto px-10 flex lg:items-center justify-between lg:flex-col md:flex-col flex-col">
                    {/* Title & disclaimer: */}
                    <div className="flex justify-center">
                        <h1 className="focus:outline-none md:w-90 font-bold md:text-3xl text-2xl text-black">
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
                                <div key={title} role="listitem" className="bg-white shadow-md border border-white p-4 xl:p-4">
                                    <div className="pl-4 pt-4 flex items-start justify-between">
                                        <div className="mr-6">
                                            <p className="mb-4 text-base font-semibold leading-none text-gray-800">{title}</p>
                                            <p className="xl:text-base xl:leading-loose text-base text-gray-600">{description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Recommendations:  */}
            <div className="mt-10 py-16 bg-gray-50 border border-black shadow-lg">
                <div className="container mx-auto px-10 flex flex-col lg:items-center justify-between lg:flex-row">
                    <div className="mb-14 xl:mb-0 xl:text-start xl:w-1/2">
                        <h1 className="text-2xl leading-tight md:text-4xl xl:text-5xl font-semibold leading-10  text-gray-800 xl:w-2/3 pr-16 lg:pr-0">
                            {homeHeroData.recommendations_txt[0]}
                        </h1>
                        <p className="mt-10 text-base leading-normal text-gray-600 md:w-2/3 lg:w-3/4 pr-16 lg:pr-0 italic">
                            {homeHeroData.recommendations_txt[1]}
                        </p>
                        <button className="hidden md:block w-full sm:w-auto mt-12 focus:outline-none focus:ring-2 focus:ring-green-700 flex items-start justify-center sm:justify-start px-8 py-4 bg-black hover:bg-green-500 rounded text-base font-medium leading-none text-center text-white">
                            <a href={DCENT_Report} download="DCENTReport" target='_'>
                                {homeHeroData.recommendations_txt[2]}
                            </a>
                        </button>
                    </div>
                    <div role="list" aria-label="Testimonials" className="text-left xl:w-3/4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 flex-wrap justify-center items-start">
                       {audit_outputs.recommendations.map((recommendations) => {
                            const {title, description} = recommendations;

                            return (
                                <div key={title} role="listitem" className="bg-white shadow-md border border-white rounded p-4 xl:p-4">
                                    <div className="pl-4 pt-4 flex items-start justify-between">
                                        <div className="mr-6">
                                            <p className="mb-4 text-base font-semibold leading-none text-gray-800">{title}</p>
                                            <p className="xl:text-base xl:leading-loose text-base text-gray-600">{description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        <button className="md:hidden w-full sm:w-auto mt-4 focus:outline-none flex items-start justify-center sm:justify-start px-8 py-4 bg-black hover:bg-green-600 rounded text-base font-medium leading-none text-center text-white">
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
