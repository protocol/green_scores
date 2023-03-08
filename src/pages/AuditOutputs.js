// react
import React from 'react'

// components:
import AuditOutputsCard from '../components/AuditOutputsCard';

// data:
import { dcentData, piknikData, sxxData} from '../utils/AuditOutputs';

const AuditOutputs = () => {

  return (
    <div className='h-screen dark:bg-gray-900'>
        <div className='p-5 justify-center'>
            <div className="p-5 mt-5 mx-40 shadow-lg bg-gradient-to-r from-green-200 via-grey-100 to-blue-200 border border border-black">
                    <div className="flex justify-center text-center">
                        <h1 className="focus:outline-none md:w-90 font-bold md:text-2xl text-xl text-black">
                            Storage Provider Audit Outputs
                        </h1>
                    </div>
                </div>
            {/* Audit outputs */}
            <div className='justify-center flex gap-10 p-10'>    
                <a href='/'> 
                    <AuditOutputsCard data={dcentData}/>
                </a>

                <a href='/'> 
                    <AuditOutputsCard data={piknikData}/>
                </a>

                <a href='/'> 
                    <AuditOutputsCard data={sxxData}/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default AuditOutputs
