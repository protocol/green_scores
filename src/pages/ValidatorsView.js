import React from 'react'
import { Link } from "react-router-dom";

const ValidatorsView = () => {

  const validatorData = {
    title: "Validator Wallet Addresses",
    text_desc_1: "View a list of validated wallet addresses. Viewing a list of these addresses can be beneficial for various reasons, including identifying reputable users or verifying the authenticity of a transaction",
    text_desc_2: "Current Validated Wallet Addresses",
    text_desc_3: "View Transactions:",
    text_desc_4: "Explore on Etherscan",
    text_auditor: "Auditor:",
    text_wallet_address: "Wallet Address:",
    auditor: "Anthesis",
    address_1: "0xf552699fa32ed3ed3b162815e8db99b8e20c9fcc",
    address_2: "0x5a3ab4ac1e84723b759b93f34b7fbf91256f68b5",
  };

  return (
    <div className='p-10 h-screen bg-white dark:bg-gray-900'>
      {/* Title */}
      <div className="p-5 shadow-lg bg-gradient-to-r from-green-200 via-grey-100 to-blue-200 border border border-black">
        <div className="flex justify-center text-center grid-row-1">
          <h1 className="focus:outline-none md:w-90 font-bold md:text-xl text-lg text-black">
            {validatorData.title}
          </h1>
        </div>
        {/* Description 1 */}
        <h1 className='p-4 text-sm text-center'>
            {validatorData.text_desc_1}
        </h1>
      </div>

      {/* Validator Tables */}
      <div className="py-10">
        <div className="px-5 md:px-10 py-4 md:py-5 bg-green-100 border border-black shadow-lg dark:border-green-500 dark:border-2">
          <div className="sm:flex items-center justify-between">
            <p className=" md:text-xl text-lg font-bold leading-normal text-gray-800">
              {validatorData.text_desc_2}
            </p>
          </div>
        </div>

        {/* Table: */}
        <div className="bg-gray-50 shadow px-4 md:px-10 pt-4 md:pt-7 pb-10 overflow-y-auto border border-black shadow-lg dark:bg-black dark:border-green-500">
          <table className="w-full whitespace-wrap">
            {/* Table Head */}
            <thead>
              <tr className="h-16 w-full text-md leading-none text-gray-800">
                <th className="font-semibold text-center dark:text-green-400">
                  {validatorData.text_auditor}
                </th>
                <th className="font-semibold text-center dark:text-green-400">
                  {validatorData.text_wallet_address}
                </th>
                <th className="font-semibold text-center dark:text-green-400">
                  {validatorData.text_desc_3}
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="w-full">

              {/* Wallet 01 */}
              <tr className="h-38 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-50 dark:bg-black">
                <td className="p-5 text-center">
                    <p className="font-medium leading-none text-gray-800 dark:text-gray-400">{validatorData.auditor}</p>
                </td>
                <td className="p-5 text-center">
                    <p className="font-medium leading-none text-gray-800 dark:text-gray-400">{validatorData.address_1}</p>
                </td>
                <td className="p-5 text-center">
                  <button className="inline-flex items-start justify-start px-6 py-3 bg-black shadow-lg dark:bg-green-500">
                    <Link to={`https://etherscan.io/address/${validatorData.address_1}`}>
                        <p className="text-sm font-medium leading-none text-white dark:text-black">
                          {validatorData.text_desc_4}
                        </p>
                    </Link>
                    </button>
                </td>
              </tr>

              {/* Wallet 02 */}
              <tr className="h-38 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-50 dark:bg-black">
                <td className="p-5 text-center">
                  <p className="font-medium leading-none text-gray-800 dark:text-gray-400">{validatorData.auditor}</p>
                </td>
                <td className="p-5 text-center">
                    <p className="font-medium leading-none text-gray-800 dark:text-gray-400">{validatorData.address_2}</p>
                </td>
                <td className="p-5 text-center">
                  <button className="inline-flex items-start justify-start px-6 py-3 bg-black shadow-lg dark:bg-green-500">
                    <Link to={`https://etherscan.io/address/${validatorData.address_2}`}>
                      <p className="text-sm font-medium leading-none text-white dark:text-black">
                        {validatorData.text_desc_4}
                      </p>
                    </Link>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ValidatorsView
