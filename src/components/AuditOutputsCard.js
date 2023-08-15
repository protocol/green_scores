// react
import React from 'react'
import { Link } from "react-router-dom"

const AuditOutputsCard = ({data}) => {
  
  const recordType = [
    "Electricity%20Audit%20Data",
    "Water%20Audit%20Data"
  ];

  return (
    <>
    <div>
      <div className="border border-black bg-gray-50 shadow-xl dark:border-green-400 dark:border dark:bg-black">
          <div className='overflow-hidden'>
            <img className="w-full h-40 object-cover bg-black" src={data.image} alt="spimage"></img>
          </div>
            {/* <img className="w-full h-40 aspect-auto bg-black" src={data.image} alt="spimage"></img> */}
            <div className="px-6 py-4">
                <div className="line-clamp-1 font-bold text-lg mb-2 dark:text-green-300">{data.title}</div> 

                <div className='flex inline-block'>
                  <span className="line-clamp-1  shadow-lg border-black border px-3 py-1 text-sm font-semibold text-green-600 dark:border-green-800 dark:border">{data.tier}</span>   
                </div>        
            </div>
            <p className="text-black ml-6 mb-4 font-bold text-sm dark:text-white">Explore Findings: </p>
            <div className="px-6 pb-2 flex gap-x-5">
              <Link to={`/auditoutputs/${data.title}/${recordType[0]}`}>
                <button className="flex justify-center items-center bg-black px-4 py-2 text-sm font-semibold text-white mb-2 shadow-lg dark:bg-green-100 dark:text-green-500">Electricity</button>
              </Link>

              <Link to={`/auditoutputs/${data.title}/${recordType[1]}`}>
                <button className="flex justify-center items-center bg-black px-4 py-2 text-sm font-semibold text-white mb-2 shadow-lg dark:bg-green-100 dark:text-green-500">Water</button>
              </Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default AuditOutputsCard
