// react
import React from "react";

// components
import FindingsTable from "../components/Table"

// data
import {dataRequirements,
        emissionsProfile,
        embodiedEmissions,
        reportingMethods,
        auditingProcess,
        energyMatching,
         } from "../utils/FindingsTable";

const FindingsSummary = () => {

    return (
        <>
        <div className="dark:bg-gray-900">
            {/* Data Requirements: */}
            <FindingsTable data={dataRequirements}/>

            {/* Emissions Profile: */}
            <FindingsTable data={emissionsProfile}/>

            {/* Green Energy Matching: */}
            <FindingsTable data={energyMatching}/>

            {/* Embodied Emissions: */}
            <FindingsTable data={embodiedEmissions}/>

            {/* Reporting Methods: */}
            <FindingsTable data={reportingMethods}/>

            {/* Auditing Process: */}
            <FindingsTable data={auditingProcess}/>
        </div>
        </>
    )
}

export default FindingsSummary
