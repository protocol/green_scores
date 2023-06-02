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
    address_1: "0x5a3AB4ac1e84723B759B93F34b7FBf91256F68b5",
    address_2: "0xeaa16f97efb4717442aaadc6efe959e461b9d2e8",
    address_3: "0x582b4cCDB331c075121eD825dcD572E5480360FF",
    address_4: "0xf552699Fa32ed3eD3b162815e8DB99B8e20C9fcC",
    addresses : [
      "0x5a3AB4ac1e84723B759B93F34b7FBf91256F68b5",
      "0xeaa16f97efb4717442aaadc6efe959e461b9d2e8",
      "0x582b4cCDB331c075121eD825dcD572E5480360FF",
      "0xf552699Fa32ed3eD3b162815e8DB99B8e20C9fcC",
    ]
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
              {/* Address Mapping */}
              {validatorData.addresses.map((address, index) => (
                <tr key={index} className="h-38 text-md leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-50 dark:bg-black">
                  <td key={index} className="p-4 text-center">
                    <Link to={`https://www.anthesisgroup.com/`}>
                      <p className="leading-none text-black dark:text-gray-300 hover:text-green-500">
                        {validatorData.auditor}
                      </p>
                    </Link>
                  </td>
                  <td key={index} className="p-4 text-center">
                      <p className="leading-none text-black dark:text-gray-300">{address}</p>
                  </td>
                  <td key={index} className="p-4 text-center">
                    <button className="inline-flex items-start justify-start px-6 py-3 bg-black shadow-lg dark:bg-green-500 hover:bg-green-500">
                      <Link to={`https://etherscan.io/address/${address}`}>
                          <p className="text-sm font-semibold leading-none text-white dark:text-black">
                            {validatorData.text_desc_4}
                          </p>
                      </Link>
                      </button>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ValidatorsView
