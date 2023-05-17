// react
import React from 'react'

// data 
import {homeHeroData,
    links } from '../utils/utils';
import { audit_outputs } from '../utils/FindingsTable';

// report
import DCENT_Report from "../assets/DCENT_Finding Summary_12Dec2022.pdf"
import FindingsSummary from '../pages/FindingsSummary';

const DcentOutputs = () => {
  return (
    <div className='p-10'>
       {/* DCents - Green Score  */}
       <div className="p-5 shadow-lg bg-gradient-to-r from-green-200 via-grey-100 to-blue-200 border border border-black">
            <div className="flex justify-center text-center grid-row-1">
                <h1 className="focus:outline-none md:w-90 font-bold md:text-xl text-lg text-black">
                    {homeHeroData.dcent_green_score}
                </h1>
            </div>
        </div>

        <div className='mt-10 gap-10 grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>

            {/* Findings Summary */}
            <div className="p-10 bg-gray-50 border border-black shadow-lg dark:bg-black dark:border-green-400">
                <div className="container mx-auto lg:items-center justify-between flex-col">
                    {/* Title & disclaimer: */}
                    <div className="flex justify-center">
                        <h1 className="focus:outline-none md:w-90 font-bold md:text-xl text-lg text-black dark:text-green-500">
                            {homeHeroData.findings_summary_txt[0]}
                        </h1>
                    </div>
                    <div className="mt-5 mb-5 p-5 flex justify-center bg-red-100 shadow-md border-2 border-red-300 w-full">
                        <h1 className="md:text-xs sm:text-center text-xs text-start text-black italic">
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
                                            <p className="mb-4 text-sm font-semibold leading-none text-gray-800 dark:text-white">{title}</p>
                                            <p className="xl:text-md xl:leading-loose text-xs text-gray-600 dark:text-gray-400">{description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Recommendations:  */}
            <div className="p-8 bg-gray-50 border border-black shadow-lg dark:bg-black dark:border-green-400">
                <div className="container mx-auto flex lg:items-center justify-between flex-col">
                    {/* Title & disclaimer: */}
                    <div className="flex justify-center">
                        <h1 className="focus:outline-none md:w-90 font-bold md:text-xl text-lg text-black dark:text-green-500">
                            {homeHeroData.recommendations_txt[0]}
                        </h1>
                    </div>
                    <div className="mt-5 mb-5 p-5 flex justify-center bg-red-100 shadow-md border-2 border-red-300 w-full">
                        <h1 className="md:text-xs sm:text-center text-xs text-start text-black italic">
                            {homeHeroData.recommendations_txt[1]}
                        </h1>
                    </div>

                    {/* Recommendations */}
                    <div role="list" className="text-left grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 flex-wrap justify-center items-start">
                        {audit_outputs.recommendations.map((recommendations) => {
                            const {title, description} = recommendations;

                            return (
                                <div key={title} role="listitem" className="bg-white shadow-md border border-white rounded p-4 xl:p-4 dark:bg-gray-800">
                                    <div className="pl-4 pt-4 flex items-start justify-between">
                                        <div className="mr-6">
                                            <p className="mb-4 text-sm font-semibold leading-none text-gray-800 dark:text-white">{title}</p>
                                            <p className="xl:text-md xl:leading-loose text-xs text-gray-600 dark:text-gray-400">{description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <button className="mt-10 px-8 py-4 flex flex-col items-center text-base text-center text-white font-medium leading-none bg-black dark:bg-green-500 dark:text-black">
                        <a href={DCENT_Report} download="DCENTReport" target='_'>
                            {homeHeroData.recommendations_txt[2]}
                        </a>
                    </button>
                </div>
            </div>
        </div>
                        
        {/* Findings Summary */}
        <FindingsSummary/>
    </div>
  )
}

export default DcentOutputs
