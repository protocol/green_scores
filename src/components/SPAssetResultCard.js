import React from 'react'

const SPAssetResultCard = ({asset}) => {

    return (
        <div className=''>
                <div className=''>
                {
                    Object.keys(asset).map((key, i) => (
                        key === "Renewable Electricity Purchased Documentation" ? 
                            (
                            <div className="flex p-1 bg-white border border-black border-dotted" key={i}>
                                <span className='p-1 text-black text-xs dark:text-green-500'>{key} </span>
                                <span className='overflow-x-auto flex-wrap p-1 ml-5 text-green-600 text-xs font-semibold dark:text-green-500'>You can download the PDFs here</span>
                            </div>
                            )
                        : 
                        (
                            <div className="flex p-1 bg-white border border-black border-dotted" key={i}>
                                <span className='p-1 text-black text-xs dark:text-green-500'>{key} </span>
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
