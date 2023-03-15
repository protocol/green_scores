// react
import React, {useState, useEffect, CSSProperties} from 'react'
import SPAssetResultCard from './SPAssetResultCard';
import { Link } from 'react-router-dom';

// loader:
import ScaleLoader from "react-spinners/ScaleLoader";

const SPAuditDetails = () => {

    const [data, setData] = React.useState(null);
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#39FF14");
  

    useEffect(() => {
      
        fetch("https://sp-serverless-api.vercel.app/assets")
        .then((res) => res.json())
        .then((data) =>
        {
            // ACTUAL
            setData(data);
            setLoading(!loading);
        });
    }, []);

    return (
        <div>
            <div className="p-10 dark:bg-gray-900">
                <header className="App-header">

                    {/* DCents - Green Score  */}
                    <div className="p-5 shadow-lg bg-gradient-to-r from-green-200 via-grey-100 to-blue-200 border border border-black">
                            <div className="flex justify-center text-center grid-row-1">
                                <h1 className="focus:outline-none md:w-90 font-bold md:text-xl text-lg text-black">
                                    🏆 PiKNiK's 2022 Sustainability Claim Tier: Bronze 🏆
                                </h1>
                            </div>
                    </div>
                    {!data ? 
                    (
                        <div className='mt-60 text-center justify-center h-screen dark:bg-gray-900'>
                             <ScaleLoader
                                color={color}
                                loading={loading}
                                size={150}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />
                        </div>
                    )
                    : (
                        // Mapping Data Results
                        data.result.map((result, index) => (
                            <div className='mt-10 p-5 border border-black shadow-lg bg-gray-50 dark:bg-black dark:border-green-400' key={index}>
                                
                                {/* Card Title */}
                                <div className='flex'>
                                {index === 0 ? 
                                        result.result.asset.data.map((asset, index) => (
                                            
                                            <div key={index} className=''>
                                                 <h1 className="font-semibold dark:text-green-400">
                                                    {asset["Storage Provider Name"]}
                                                </h1>
                                            </div>
                                        ))
                                    : 
                                    result.result.asset.map((asset, index) => (
                                            
                                        <div key={index}>
                                            <h1 className="font-semibold dark:text-green-400">
                                                    {asset["Storage Provider Name"]}
                                            </h1>
                                        </div>
                                    ))
                                }
                                </div>

                                {/* Block CID */}
                                <div className='mt-4 text-xs font-semibold text-black dark:text-black flex grid lg:grid-cols-2 lg:gap-6 md:grid-cols-2 md:gap-6 sm:grid-cols-1 sm:gap-5 xs:grid-cols-1 xs:gap-4'>
                                    <div className='overflow-hidden p-2 bg-green-100 border border-black'>
                                        <h1 className="">
                                            <Link target={"_blank"} rel="noreferrer" to={`https://explore.ipld.io/#/explore/${result.result.block}`}>
                                                Explore Block CID: {result.result.block}
                                            </Link>
                                        </h1>       
                                    </div>

                                    <div className='overflow-hidden p-2 bg-blue-100 border border-black'>
                                        <Link target={"_blank"} rel="noreferrer" to={`https://explore.ipld.io/#/explore/${result.result.assetBlock.cid}`}>
                                            Explore Asset CID: {result.result.assetBlock.cid}
                                        </Link>   
                                    </div>
                                </div>
                               
                                {/* Mapping Asset Data */}
                                <div className='mt-4 mb-4'>
                                    {index === 0 ? 
                                       (
                                        <div className='grid grid-cols-1 gap-3 gap-x-8 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                                            {
                                                result.result.asset.data.map((asset, index) => (
                                                    <SPAssetResultCard key={index} asset={asset}/>                                 
                                                ))
                                            }
                                        </div>
                                        )
                                    : 
                                    (
                                        <div className='grid grid-cols-1 gap-3 gap-x-8 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                                            {
                                                result.result.asset.map((asset, index) => (
                                                    <SPAssetResultCard key={index} asset={asset}/>                                 
                                                ))
                                            }
                                        </div>
                                        )
                                    }
                                </div>
                            </div>
                        ))
                    )}
                </header>
            </div>
        </div>
    )
}

export default SPAuditDetails
