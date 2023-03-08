import React from 'react'

const AuditOutputsCard = ({data}) => {
  return (
    <div>
      {/* DCENT */}
      <div class="max-w-sm rounded border border-black bg-gray-50 shadow-xl dark:border-green-400 dark:border dark:bg-black">
            <img class="w-full h-40 bg-black" src={data.image} alt="DCENT"></img>
            <div class="px-6 py-4">
                <div className='flex inline-block'>
                    <div class="font-bold text-xl mb-2 dark:text-green-300">{data.title}</div> 
                    <span class="ml-5 bg-gray-200 shadow-lg border-black border rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-5">{data.tier}</span>
                </div>
            
                <p class="text-gray-700 text-base dark:text-white"> {data.text} </p>
            </div>
            <div class="px-6 pt-2 pb-2">
                <button class="flex justify-center items-center bg-black px-4 py-2 text-sm font-semibold text-white mb-2 shadow-lg">Explore Findings</button>
            </div>
        </div>
    </div>
  )
}

export default AuditOutputsCard
