import React from 'react'

const TraceableCIDsModal = ({visible, onClose, data}) => {

    if (!visible) return null; 

    const handleOnClose = (e) => {
        if(e.target.id === "traceable_cids_container") onClose(); 
    }

    return (
        <div 
            id="traceable_cids_container"
            onClick={handleOnClose} 
            className='mt-20 justify-center items-center flex fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm'>
            <div className='p-20 h-full overflow-x-auto'>
                <div className='bg-gray-100 dark:bg-black p-5 border border-black dark:border dark:border-green-500'>
                {!data.signed ? (
                <div className=''>
                    <span className='text-md font-semibold dark:text-green-300'>Signatures</span>
                        <div className='text-xs grid grid-cols-1'>

                        {Object.keys(data).map((key, i) => (
                            <>
                            {key !== "signed" && key !== "parent" && (
                                <div key={i} className="flex p-1 mt-2 bg-white border border-black border-dotted dark:bg-gray-800 dark:border-green-500">
                                    <span className='p-1 text-black text-xs dark:text-green-400'>
                                        {key} 
                                    </span>
                                    <span className='break-all p-1 text-green-600 text-xs font-semibold dark:text-green-500'>
                                        {data[key]}
                                    </span>
                                </div>  
                            )}
                            </>
                        ))}
                    </div>
                    <div className='mt-5 flex justify-center'>
                        <button className="px-3 py-1 text-sm font-semibold bg-red-200 text-red-600 border border-red-600 dark:border dark:border-red-400" onClick={onClose}>close</button>
                    </div>
                </div>
                ) : (
                <div className=''>
                    <span className='text-md font-semibold dark:text-green-300'>Signatures</span>
                        <div className='text-xs grid grid-cols-1 gap-2 gap-x-4 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>

                        {Object.keys(data).map((key, i) => (
                            <>
                            {key !== "signed" && key !== "parent" && (
                                <div key={i} className="flex p-1 mt-2 bg-white border border-black border-dotted dark:bg-gray-800 dark:border-green-500">
                                    <span className='p-1 text-black text-xs dark:text-green-400'>
                                        {key} 
                                    </span>
                                    <span className='break-all p-1 text-green-600 text-xs font-semibold dark:text-green-500'>
                                        {data[key]}
                                    </span>
                                </div>  
                            )}
                            {key === "signed" && (
                                <>
                               {Object.keys(data.signed).map((key, i) => (
                                <div key={i} className="flex p-1 mt-2 bg-white border border-black border-dotted dark:bg-gray-800 dark:border-green-500">
                                    <span className='p-1 text-black text-xs dark:text-green-400'>
                                        {key} 
                                    </span>
                                    <span className='break-all p-1 text-green-600 text-xs font-semibold dark:text-green-500'>
                                        {data.signed[key]}
                                    </span>
                                </div>  
                                ))}
                                </>
                            )}
                            </>
                        ))}
                        </div>
                    <div className='mt-5 flex justify-center'>
                        <button className="px-3 py-1 text-sm font-semibold bg-red-200 text-red-600 border border-red-600 dark:border dark:border-red-400" onClick={onClose}>close</button>
                    </div>
                </div>
                )}
                </div>
            </div>
        </div>
    )
}

export default TraceableCIDsModal
