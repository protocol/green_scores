import React from 'react'
import { Link } from 'react-router-dom';

const SPAssetResultCard = ({asset}) => {

    // Splits minerID data into array and then filters out characters
    const getMinerIDs = (minerIDs) => {

        let minerIDsData = JSON.stringify(minerIDs);
        let len = minerIDsData.length;

        let parsedMinerIDsData = minerIDsData.substring(2, len - 2).split(',');
        let result = ""; 

        for(let i = 0; i < parsedMinerIDsData.length; i++){
            const searchRegExp = /'/g;

            if(i !== parsedMinerIDsData.length - 1) {
            
                result += parsedMinerIDsData[i].replace(searchRegExp, "") + ", ";
            } else {
                result += parsedMinerIDsData[i].replace(searchRegExp, "");
            }
        }

        return result;
    }

    return (
        <div className=''>
                <div className=''>
                {
                    Object.keys(asset).map((key, i) => (
                        <>
                            {key === "Renewable Electricity Purchased Documentation" &&  (
                                <div className="flex p-1 bg-white border border-black border-dotted dark:bg-gray-800 dark:border-green-500" key={i}>
                                    <span className='p-1 text-black text-xs dark:text-green-400 '>{key} </span>
                                    {/* <span className='overflow-x-auto flex-wrap p-1 ml-5 text-green-600 text-xs font-semibold dark:text-green-500'>You can download the PDFs here</span> */}

                                    {!asset[key] ? 
                                        (
                                            <span className='overflow-x-auto flex-wrap p-1 ml-5 text-green-600 text-xs font-semibold dark:text-green-500'>N/A</span>
                                        ) : (
                                            asset[key].map((docs, index) => (
                                                <Link to={`https://green.filecoin.space/ipfs/${docs.cid}`} key={index} className='overflow-x-auto bg-green-100 border border-black flex-wrap p-1 ml-5 text-green-700 text-xs font-semibold dark:text-green-500'>View Doc {index + 1}</Link>
                                            ))
                                        )
                                    }
                                </div>
                            )} 
                            {key === "minerIDs" && (
                                <div className="flex p-1 bg-white border border-black border-dotted dark:bg-gray-800 dark:border-green-500" key={i}>
                                    <span className='p-1 text-black text-xs dark:text-green-400'>{key} </span>
                                    <span className='overflow-x-auto p-1 ml-5 text-green-600 text-xs font-semibold dark:text-green-500'>{getMinerIDs(asset[key])}</span>
                                </div>
                            )}
                            {(key !== "Renewable Electricity Purchased Documentation" && key !== "minerIDs") && (
                                <div>      
                                    {(asset[key] === '') ? (
                                        <div className="flex p-1 bg-white border border-black border-dotted dark:bg-gray-800 dark:border-green-500" key={i}>
                                            <span className='p-1 text-black text-xs dark:text-green-400'>{key} </span>
                                            <span className='overflow-x-auto p-1 ml-5 text-green-600 text-xs font-semibold dark:text-green-500'>Not Available</span>
                                        </div>
                                    ) : (
                                        <div className="flex p-1 bg-white border border-black border-dotted dark:bg-gray-800 dark:border-green-500" key={i}>
                                            <span className='p-1 text-black text-xs dark:text-green-400'>{key} </span>
                                            <span className='overflow-x-auto p-1 ml-5 text-green-600 text-xs font-semibold dark:text-green-500'>{asset[key]}</span>
                                        </div>
                                    )}
                                </div>
                            )}
                        </>
                    ))
                }
            </div>
        </div>  
  )
}

export default SPAssetResultCard
