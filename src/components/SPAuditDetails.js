// react
import React, {useState, useEffect, useRef} from 'react'
import SPAssetResultCard from './SPAssetResultCard';
import { Link } from 'react-router-dom';

// loader:
import ScaleLoader from "react-spinners/ScaleLoader";

const SPAuditDetails = ({storage_provider, record_type}) => {

    const [data, setData] = React.useState(null);
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#39FF14");

    const loadStorageProviderOutputs = () => {

        let url = `https://sp-outputs-api.vercel.app/api/storage-provider/?sp_name=${storage_provider}&record_type=${record_type}`;
        console.log(url);
        fetch(url)
        .then((res) => res.json())
        .then((data) =>
        {
            console.log(data);
            setData(data);
            setLoading(!loading);
        });
    };

    const dataLoaded = useRef(false);

    useEffect(() => {

        if (!dataLoaded.current) {
            loadStorageProviderOutputs(); 
            dataLoaded.current = true;
          }
    }, [data, setData]);

    return (
        <div>
            <div className="p-10 dark:bg-gray-900">
                <header className="App-header">

                    {/* Green Score: */}
                    {storage_provider === "Anonymous" ? (
                        <>
                        {/* Sp Name */}
                        <div className="p-5 shadow-lg bg-gradient-to-r from-green-200 via-grey-100 to-blue-200 border border border-black">
                            <div className="flex justify-center text-center grid-row-1">
                                <h1 className="focus:outline-none md:w-90 font-bold md:text-xl text-lg text-black">
                                    {storage_provider} Miner IDs - {record_type} Findings 🔎
                                </h1>
                            </div>

                            {/* Anonymous ID Alerts */}
                            <div className="mt-4 p-2 ml-10 mr-10 shadow-lg bg-red-200 border border border-black">
                                <div className="flex justify-center text-center grid-row-1">
                                    <h1 className="text-xs text-black">
                                        Anonymous Miner IDs energy validation process outputs will not include Storage Providers or locations associated with them.
                                    </h1>
                                </div>
                            </div>
                        </div>
                        </>
                    ) : (
                        <div className="p-5 shadow-lg bg-gradient-to-r from-green-200 via-grey-100 to-blue-200 border border border-black">
                            <div className="flex justify-center text-center grid-row-1">
                                <h1 className="focus:outline-none md:w-90 font-bold md:text-xl text-lg text-black">
                                    🔎 {storage_provider} - {record_type} Findings 🔎
                                </h1>
                            </div>
                        </div>
                    )}

                    {/* Energy Validation Data */}
                    {!data ? (
                        <div className='mt-60 text-center justify-center h-screen dark:bg-gray-900'>
                             <ScaleLoader
                                color={color}
                                loading={loading}
                                size={150}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />
                        </div>
                    ) : (
                       <div className='h-full dark:bg-gray-900'>
                            {data.length === 0 ? (
                                <div className='mt-60 h-full dark:bg-gray-900'> 
                                    <div className='flex items-center justify-center'> 
                                        <div className='w-1/2 p-10 text-center border border-red-500 bg-red-50 shadow-lg dark:bg-gray-700'>
                                            <p className='text-xl text-black font-semibold dark:text-red-600'>There are currently no {record_type} Findings for {storage_provider}.</p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                // Mapping Data Results
                                data.map((result, index) => (
                                    <div className='mt-10 p-5 border border-black shadow-lg bg-gray-50 dark:bg-black dark:border-green-400' key={index}>
                                        {/* Card Title */}
                                        <div className='flex'>                             
                                            <div key={index}>
                                                <h1 className="font-semibold dark:text-green-400">
                                                        {result["storage_provider_name"]}
                                                </h1>
                                            </div>
                                        </div>

                                        {/* Block CID */}
                                        <div className='mt-4 text-xs font-semibold text-black dark:text-black flex grid lg:grid-cols-2 lg:gap-6 md:grid-cols-2 md:gap-6 sm:grid-cols-1 sm:gap-5 xs:grid-cols-1 xs:gap-4'>
                                            <div className='overflow-hidden p-2 bg-green-100 border border-black'>
                                                <h1 className="">
                                                    <Link target={"_blank"} rel="noreferrer" to={`https://explore.ipld.io/#/explore/${result["block_cid"]}`}>
                                                        Explore Block CID: {result["block_cid"]}
                                                    </Link>
                                                </h1>       
                                            </div>

                                            <div className='overflow-hidden p-2 bg-blue-100 border border-black'>
                                                <Link target={"_blank"} rel="noreferrer" to={`https://explore.ipld.io/#/explore/${result["asset_block_cid"]}`}>
                                                    Explore Asset CID: {result["asset_block_cid"]}
                                                </Link>   
                                            </div>
                                        </div>
                                    
                                        {/* Mapping Asset Data */}
                                        <div className='mt-4 mb-4'>
                                            {result.asset.data ? 
                                                (
                                                <div className='grid grid-cols-1 gap-3 gap-x-8 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                                                    {
                                                        result.asset.data.map((result, index) => (
                                                            <div>
                                                                <SPAssetResultCard key={index} asset={result}/>                                 
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                                ) : 
                                                (
                                                    <div className='grid grid-cols-1 gap-3 gap-x-8 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                                                    {
                                                        result.asset.map((result, index) => (
                                                            <div>
                                                                <SPAssetResultCard key={index} asset={result}/>                                 
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                                )
                                            }
                                        </div>
                                    </div>                               
                                )) 
                            )}
                        </div>
                    )}
                </header>
            </div>
        </div>
    )
}

export default SPAuditDetails
