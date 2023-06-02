// react
import React from 'react'
import {useParams} from "react-router-dom";

// components:
import SPAuditDetails from './SPAuditDetails';


const SPAuditOutput = () => {
    const { name, record_type } = useParams(); 
    
    console.log(name);  

    return (
        <>
        {name === "DCENT" ?
            <div>
                <SPAuditDetails storage_provider={name} record_type={record_type}/>
            </div> 
        : null }
        {name === "PiKNiK" ? 
            <div>
                <SPAuditDetails storage_provider={name} record_type={record_type}/>
            </div>
        : null }
        {name === "SXX Dongyue Temple Data Center" ? 
            <div>
                <SPAuditDetails storage_provider={name} record_type={record_type}/>
            </div>
        : null }
        {name === "MongoStorage" ? 
            <div>
                <SPAuditDetails storage_provider={name} record_type={record_type}/>
            </div>
        : null }
        {name === "Holon New Zealand Operations" ? 
            <div>
                <SPAuditDetails storage_provider={name} record_type={record_type}/>
            </div>
        : null }
        {name === "Anonymous" ? 
            <div>
                <SPAuditDetails storage_provider={name} record_type={record_type}/>
            </div>
        : null }
        </>
    )
}

export default SPAuditOutput
