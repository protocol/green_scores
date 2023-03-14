// react
import React from 'react'
import {useParams, useNavigate} from "react-router-dom";

// components:
import DcentOutputs from './DcentOutputs';


const SPAuditOutput = () => {
    const { name } = useParams(); 
    
    console.log(name);  

    return (
        <>
        {name === "DCENT" ? 
            <div className="">
                <DcentOutputs/>
            </div> 
        : null }
        {name === "PiKNiK" ? 
        <div className="h-screen dark:bg-gray-900">
            <div className='text-center p-10'>
                <h1 className='text-white'>Coming Soon!</h1>
            </div>
        </div> 
        : null }
        {name === "SXX" ? 
            <div className="h-screen dark:bg-gray-900">
                <div className='text-center p-10'>
                    <h1 className='text-white'>Coming Soon!</h1>
                </div>
            </div> 
        : null }
        </>
    )
}

export default SPAuditOutput
