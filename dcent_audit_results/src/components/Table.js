// react
import React from 'react'

// sustainability data
import { sustainabilityTiers } from "../utils/FindingsTable";

const Table = ({data}) => {

    return (
        <>
        <div className="mt-10 px-5 w-full sm:px-10">
            <div className="px-5 md:px-10 py-4 md:py-7 bg-gray-100 border border-black shadow-lg">
                <div className="sm:flex items-center justify-between">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">{data.criteria}</p>
                    <div>
                        <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-black hover:bg-black focus:outline-none rounded">
                            <p className="text-sm font-medium leading-none text-white">Learn More</p>
                        </button>
                    </div>
                </div>
            </div>

            {/* Table: */}
            <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto border border-black shadow-lg">
                <table className="w-full whitespace-wrap">

                    {/* Table Head */}
                    <thead>
                        <tr className="h-16 w-full text-sm leading-none text-gray-800">
                            {data.titles.map((title, index) => (
                                <th key={index} className="font-normal text-center">
                                    {title}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="w-full">

                        {/* Bronze Row */}
                        <tr className="h-35 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100">
                            <td className="pl-4 cursor-pointer">
                                <div className="flex items-center">
                                    <div className="w-10 h-10">
                                        <img className="w-full h-full" src={sustainabilityTiers.bronze.image} alt="Bronze Badge"/>
                                    </div>
                                    <div className="pl-4">
                                        <p className="font-medium text-xs">{sustainabilityTiers.bronze.tier}</p>
                                    </div>
                                </div>
                            </td>

                            {data.bronze.map((bronze_data, index) => (
                                <td key={index} className="p-4 text-center">
                                    <p className="text-xs font-medium leading-none text-gray-800">{bronze_data}</p>
                                </td>
                            ))}
                        </tr>

                        {/* Silver Row */}
                        <tr className="h-35 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100">
                            <td className="pl-4 cursor-pointer">
                                <div className="flex items-center">
                                    <div className="w-10 h-10">
                                        <img className="w-full h-full" src={sustainabilityTiers.silver.image} alt="Silver Badge"/>
                                    </div>
                                    <div className="pl-4">
                                        <p className="font-medium text-xs">{sustainabilityTiers.silver.tier}</p>
                                    </div>
                                </div>
                            </td>

                            {data.silver.map((silver_data, index) => (
                                <td key={index} className="p-4 text-center">
                                    <p className="text-xs font-medium leading-none text-gray-800">{silver_data}</p>
                                </td>
                            ))}
                        </tr>

                        {/* Gold Row */}
                        <tr className="h-35 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100">
                            <td className="pl-4 cursor-pointer">
                                <div className="flex items-center">
                                    <div className="w-10 h-10">
                                        <img className="w-full h-full" src={sustainabilityTiers.gold.image} alt="Gold Badge"/>
                                    </div>
                                    <div className="pl-4">
                                        <p className="font-medium text-xs">{sustainabilityTiers.gold.tier}</p>
                                    </div>
                                </div>
                            </td>

                            {data.gold.map((gold_data, index) => (
                                <td key={index} className="p-4 text-center">
                                    <p className="text-xs font-medium leading-none text-gray-800">{gold_data}</p>
                                </td>
                            ))}
                        </tr>
                    </tbody>

                    {/* SP Findings: */}
                    <tbody className="w-full">
                        <div className='mt-5 p-2 mb-5 w-fit text-md bg-black border-2 shadow-lg '>
                            <p className="text-center font-semibold text-white">Findings:</p>
                        </div>

                        {/* Results Row */}
                        <tr className="h-30 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100">
                            <td className="pl-4 cursor-pointer">
                                <div className="flex items-center">
                                    
                                    <div className="w-10 h-10">
                                        <img className="w-full h-full" src={data.results.dcent_tier.tier_img} alt="Gold Badge"/>
                                    </div>
                                    <div className="pl-4">
                                        <p className="font-medium text-xs">{data.results.dcent_tier.tier}</p>
                                    </div>
                                </div>
                            </td>

                            {data.results.findings.map((findings, index) => (
                                <td key={index} className="p-4 text-center">
                                    <p className="text-xs font-medium leading-none text-gray-800">{findings}</p>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default Table
