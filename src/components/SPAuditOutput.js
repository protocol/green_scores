// react
import React from 'react'
import {useParams} from "react-router-dom";

// components:
import DcentOutputs from './DcentOutputs';
import SPAuditDetails from './SPauditDetails';


const SPAuditOutput = () => {
    const { name } = useParams(); 
    
    console.log(name);  

    return (
        <>
        {name === "DCENT" ? 
            <div>
                <DcentOutputs/>
            </div> 
        : null }
        {name === "PiKNiK" ? 
            <div>
                <SPAuditDetails/>
            </div>
        : null }
        {name === "SXX" ? 
            <div className="h-screen dark:bg-gray-900">
                <div className='text-center p-10'>
                    <h1 className='text-green-500'>Coming Soon!</h1>
                </div>
            </div> 
        : null }
        </>
    )
}

export default SPAuditOutput
