// react
import React, {useState, useEffect, useRef} from 'react'
import SPAssetResultCard from '../components/SPAssetResultCard';
import { Link } from 'react-router-dom';
import green_energy_img from '../assets/3d_green_electricity.webp'

// dates
import DatePicker from "react-multi-date-picker"

// loader:
import ScaleLoader from "react-spinners/ScaleLoader";

const SearchOutputs = () => {

    // Selected data vars:
    const [selectedName, setSelectedName] = useState(null);
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const [selectedWater, setSelectedWater] = useState(false);
    const [selectedElectricity, setSelectedElectricity] = useState(false);
    let [color, setColor] = useState("#39FF14");

    // Selected data outputs vars:
    const [filteredData, setFilteredData] = React.useState(null);
    let [loading, setLoading] = useState(true);
    const dataLoaded = useRef(false);

    // Handle selections:
    const handleWaterClicked = () => setSelectedWater(!selectedWater)
    const handleElectricityClicked = () => setSelectedElectricity(!selectedElectricity)
    const handleNameSelected = (event) => setSelectedName(event.target.value)

    // Handle Search:
    const handleSearch = (event) => {

        let startDateFormatted = selectedStartDate.toString().replace(/\//g,'-');
        let endDateFormatted = selectedEndDate.toString().replace(/\//g,'-');

        loadStorageProviderOutputs(selectedName, startDateFormatted, endDateFormatted, selectedWater, selectedElectricity);

        if (!dataLoaded.current) {
            dataLoaded.current = true;
        }
        event.preventDefault();
    };

    // Load storage provider data:
    const loadStorageProviderOutputs = (spName, spStartDate, spEndDate, spWaterRecord, spElectricityRecord) => {
        
        let searchURL = getURL(spName, spStartDate, spEndDate, spWaterRecord, spElectricityRecord);

        console.log(searchURL);
       
        fetch(searchURL)
            .then((res) => res.json())
            .then((data) =>
            {
                console.log(data);
                setFilteredData(data);
                setLoading(!loading);
            });
    };

    // Creates URL search endpoint:
    const getURL = (spName, spStartDate, spEndDate, spWaterRecord, spElectricityRecord) => {

        let water, electricity, allSelection, url = null;
        
        if(spWaterRecord && !spElectricityRecord){
            water = "Water Audit Data";
            url = `https://sp-outputs-api.vercel.app/api/search/?sp_name=${spName}&record_type=${water}&start_date=${spStartDate}&end_date=${spEndDate}`;
        } 
        
        if(spElectricityRecord && !spWaterRecord){
            electricity = "Electricity Audit Data";
            url = `https://sp-outputs-api.vercel.app/api/search/?sp_name=${spName}&record_type=${electricity}&start_date=${spStartDate}&end_date=${spEndDate}`;
        } 

        if(spElectricityRecord && spWaterRecord){
            allSelection = "All";
            url = `https://sp-outputs-api.vercel.app/api/search/?sp_name=${spName}&record_type=${allSelection}&start_date=${spStartDate}&end_date=${spEndDate}`;
        } 

        return url;
    }

    return (
        <div className='h-full dark:bg-gray-900'>
            {/* Title*/}
            <div className='mt-10 ml-10 mr-10'>
                <div className='p-5 shadow-lg bg-gradient-to-r from-green-200 via-grey-100 to-blue-200 border border border-black'>

                    <h1 className='text-2xl font-semibold text-center'>
                        Search for an Energy Validation Output
                    </h1>
                </div>
            </div>

            {/* Search box & result box */}
            <div className="p-10 flex flex-row w-full gap-x-10">
                
                {/* left side */}
                <div className="p-10 w-1/4 h-full bg-gray-50 border-black border dark:bg-black dark:border dark:border-green-400">
                    <form className='flex' onSubmit={handleSearch}>
                        <div className='flex flex-col justify-center'>
                            <p className='text-md font-semibold dark:text-green-400'>
                                Start your search here! 👇🏽
                            </p>

                            {/* SP & Miner ID Name */}
                            <div className='mt-5'>
                                <p className='text-sm dark:text-green-400'>
                                    Storage Provider/Miner ID:
                                </p>
                                <input className='w-full h-10 mt-2 border border-gray-300 border dark:bg-white' type="text" onChange={handleNameSelected}></input>
                            </div>

                            {/* Start Date */}
                            <div className='mt-5'>
                                <p className='mb-2 text-sm dark:text-green-400'>
                                    Enter Start Date:
                                </p>
                                
                                <DatePicker 
                                    value={selectedStartDate}
                                    onChange={setSelectedStartDate}
                                    style={{
                                        backgroundColor: "white",
                                        width: "100%",
                                        height: "40px",
                                        borderRadius: "0",
                                        fontSize: "14px",
                                        padding: "10px"
                                    }}
                                />
                            </div>

                            {/* End Date */}
                            <div className='mt-5'>
                                <p className='mb-2 text-sm dark:text-green-400'>
                                    Enter End Date:
                                </p>
                                
                                <DatePicker 
                                    value={selectedEndDate}
                                    onChange={setSelectedEndDate}
                                    style={{
                                        backgroundColor: "white",
                                        width: "100%",
                                        height: "40px",
                                        borderRadius: "0",
                                        fontSize: "14px",
                                        padding: "10px"
                                    }}
                                />
                            </div>

                            {/* Record Type */}
                            <div className='mt-5'>
                                <p className='text-sm dark:text-green-400'>
                                    Record Type:
                                </p>

                                <div className='flex flex-col'>
                                    {/* Water */}
                                    <div className='flex flex-row gap-x-2'>
                                        <input 
                                            onClick={handleWaterClicked} 
                                            className='w-4 h-4 mt-2 border border-gray-300 border dark:bg-white' 
                                            type="checkbox"/>

                                        <label className="mt-2 text-xs dark:text-white">Water Audit Data</label>
                                    </div>

                                    {/* Electricity */}
                                    <div className='flex flex-row gap-x-2'>
                                        <input 
                                            onClick={handleElectricityClicked} 
                                            className='w-4 h-4 mt-2 border border-gray-300 border dark:bg-white' 
                                            type="checkbox"/>

                                        <label className="mt-2 text-xs dark:text-white">Electricity Audit Data</label>
                                    </div>
                                </div>

                            </div>

                            {/* Search Button */}
                            <div className='mt-8 text-center justify-center items-center'>
                                <button
                                    type="submit"
                                    className="bg-green-400 px-8 py-2 shadow-lg font-semibold border border-black dark:border dark:border-green dark:bg-green-100 dark:text-green-600">
                                    Search
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                {/* right sight */}
                <div className="w-3/4">
                    {/* Energy Validation Data */}
                    {!filteredData ? (
                        <div className='text-center justify-center h-full dark:bg-gray-900'>
                             {/* <ScaleLoader
                                color={color}
                                loading={loading}
                                size={150}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            /> */}

                            <div className='bg-gray-50 border border-black w-full p-10 space-y-10 dark:border dark:border-green-300 dark:bg-black'>
                                {/* <img className="w-40 h-40" src={green_energy_img} alt="spimage"></img> */}
                                <h1 className='text-xl font-semibold dark:text-green-400'>
                                    Welcome
                                </h1>
                                <p className='text-xl dark:text-green-400'>
                                    Explore All Of The Energy Validation Assets on the Site. As an example, try searching for PiKNiK, or DCENT.
                                </p>
                                {/* <p className='text-xl dark:text-green-400'>
                                    As an example, try searching for PiKNiK, or DCENT.
                                </p> */}
                            </div>
                        </div>
                    ) : (
                       <div className='h-full dark:bg-gray-900'>
                            {filteredData.length === 0 ? (
                                <div className='mt-60 h-full dark:bg-gray-900'> 
                                    <div className='flex items-center justify-center'> 
                                        <div className='w-1/2 p-10 text-center border border-red-500 bg-red-50 shadow-lg dark:bg-gray-700'>
                                            <p className='text-xl text-black font-semibold dark:text-red-600'>There are currently no Energy Validation Findings for {selectedName}.</p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                // Mapping Data Results
                                filteredData.map((result, index) => (
                                    <div className='p-5 border border-black mb-10 shadow-lg bg-gray-50 dark:bg-black dark:border-green-400' key={index}>
                                        {/* Card Title */}
                                        <div className='flex'>                             
                                            <div key={index}>
                                                <h1 className="font-semibold dark:text-green-400">
                                                        {result["storage_provider_name"]}
                                                </h1>
                                            </div>
                                        </div>

                                        {/* Block CID */}
                                        <div className='mt-4 text-xs font-semibold text-black dark:text-black flex grid lg:grid-cols-2 lg:gap-6 md:grid-cols-2 md:gap-6 sm:grid-cols-1 sm:gap-5 xs:grid-cols-1 xs:gap-4'>
                                            <div className='overflow-hidden p-2 bg-green-100 border border-black'>
                                                <h1 className="">
                                                    <Link target={"_blank"} rel="noreferrer" to={`https://explore.ipld.io/#/explore/${result["block_cid"]}`}>
                                                        Explore Block CID: {result["block_cid"]}
                                                    </Link>
                                                </h1>       
                                            </div>

                                            <div className='overflow-hidden p-2 bg-blue-100 border border-black'>
                                                <Link target={"_blank"} rel="noreferrer" to={`https://explore.ipld.io/#/explore/${result["asset_block_cid"]}`}>
                                                    Explore Asset CID: {result["asset_block_cid"]}
                                                </Link>   
                                            </div>
                                        </div>
                                    
                                        {/* Mapping Asset Data */}
                                        <div className='mt-4 mb-4'>
                                            {result.asset.data ? 
                                                (
                                                <div className='grid grid-cols-1 gap-3 gap-x-8 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                                                    {
                                                        result.asset.data.map((result, index) => (
                                                            <div>
                                                                <SPAssetResultCard key={index} asset={result}/>                                 
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                                ) : 
                                                (
                                                    <div className='grid grid-cols-1 gap-3 gap-x-8 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                                                    {
                                                        result.asset.map((result, index) => (
                                                            <div>
                                                                <SPAssetResultCard key={index} asset={result}/>                                 
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                                )
                                            }
                                        </div>
                                    </div>                               
                                )) 
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    ) 
}

export default SearchOutputs
