// react
import React, {useState, useEffect, useRef} from 'react'
import {useParams} from "react-router-dom";
import SPAssetResultCard from '../components/SPAssetResultCard';

// loader
import ScaleLoader from "react-spinners/ScaleLoader";

const Calculator = () => {
    
    // Data vars:
    const { CID } = useParams(); 
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("#39FF14");

    // Load CID data:
    const loadCIDData = () => {
        let url = `https://sp-outputs-api.vercel.app/api/cid?record=${CID}`;
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
            loadCIDData(); 
            dataLoaded.current = true;
            }
    }, [data, setData]);
    
    return (
        <div className='h-screen p-10 bg-gray-50 justify-center dark:bg-gray-900'>
            <h1 className='p-1 font-bold text-black text-lg dark:text-green-400'>Green Scores Calculator</h1>
            <h1 className='p-1 font-semibold text-black text-medium dark:text-gray-100'>Inputted CID: {CID}</h1>

            {/* CID Data */}
            {!data ? (
                // Loading Data
                <div className='mt-60 text-center justify-center h-screen dark:bg-gray-900'>
                  <ScaleLoader
                     color={color}
                     loading={loading}
                     size={150}
                     aria-label="Loading Spinner"
                     data-testid="loader"/>
                 </div>
            ) : (
                // Map Data results:
                <div className='mt-5'>
                    {data.assetBlock.map((result, index) => (
                        <p>{Object.entries(result).map(([key, value]) => (
                            <div className="flex p-1 bg-white border border-black border-dotted dark:bg-gray-800 dark:border-green-500">
                                <span className='p-1 text-black text-xs dark:text-green-400'>{key} </span>
                                <span className='overflow-x-auto p-1 ml-5 text-green-600 text-xs font-semibold dark:text-green-500'>{value}</span>
                            </div>
                        ))}
                        </p>
                    ))}
                </div>
            )} 
            {/* End of data mapping */}
        </div>
    )
}

export default Calculator;
