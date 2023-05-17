import React from 'react'
import { Link } from 'react-router-dom';

const SPAssetResultCard = ({asset}) => {

    return (
        <div className=''>
                <div className=''>
                {
                    Object.keys(asset).map((key, i) => (
                        key === "Renewable Electricity Purchased Documentation" ? 
                            (
                            <div className="flex p-1 bg-white border border-black border-dotted dark:bg-gray-800 dark:border-green-500" key={i}>
                                <span className='p-1 text-black text-xs dark:text-green-400 '>{key} </span>
                                {/* <span className='overflow-x-auto flex-wrap p-1 ml-5 text-green-600 text-xs font-semibold dark:text-green-500'>You can download the PDFs here</span> */}

                                {!asset[key] ? 
                                    (
                                        <span className='overflow-x-auto flex-wrap p-1 ml-5 text-green-600 text-xs font-semibold dark:text-green-500'>N/A</span>
                                    ) :
                                    (
                                        asset[key].map((docs, index) => (
                                            <Link to={`https://green.filecoin.space/ipfs/${docs.cid}`} key={index} className='overflow-x-auto bg-green-100 border border-black flex-wrap p-1 ml-5 text-green-700 text-xs font-semibold dark:text-green-500'>View Doc {index + 1}</Link>
                                        ))
                                    )
                                }
                            </div>
                            )
                        : 
                        (
                            <div className="flex p-1 bg-white border border-black border-dotted dark:bg-gray-800 dark:border-green-500" key={i}>
                                <span className='p-1 text-black text-xs dark:text-green-400'>{key} </span>
                                <span className='overflow-x-auto p-1 ml-5 text-green-600 text-xs font-semibold dark:text-green-500'>{asset[key]}</span>
                            </div>
                        ) 
                    ))
                }
            </div>
        </div>  
  )
}

export default SPAssetResultCard
