// react
import React from 'react'
import { Link } from "react-router-dom"

// components:
import AuditOutputsCard from '../components/AuditOutputsCard';

// data:
import { dcentData, piknikData, sxxData} from '../utils/AuditOutputs';

const AuditOutputs = () => {

    return (
    <div className='h-screen dark:bg-gray-900'>
        <div className='p-10 justify-center'>
            <div className="p-5 shadow-lg bg-gradient-to-r from-green-200 via-grey-100 to-blue-200 border border border-black">
                    <div className="flex justify-center text-center grid-row-1">
                        <h1 className="focus:outline-none md:w-90 font-bold md:text-xl text-lg text-black">
                            Storage Provider Audit Outputs
                        </h1>
                    </div>
                </div>

            {/* Audit outputs */}
            <div className='flex mt-10 gap-10 grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>    
                <Link to={`/auditoutputs/${dcentData.title}`}>
                    <AuditOutputsCard data={dcentData}/>
                </Link>

                <Link to={`/auditoutputs/${piknikData.title}`}>
                    <AuditOutputsCard data={piknikData}/>
                </Link>

                <Link to={`/auditoutputs/${sxxData.title}`}>
                    <AuditOutputsCard data={sxxData}/>
                </Link>
            </div>
        </div>
    
    </div>
  )
}

export default AuditOutputs
