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
         } from "../utils/FindingsTable";

const FindingsSummary = () => {

    return (
        <>
        <div className="mb-20">
            {/* Data Requirements: */}
            <FindingsTable data={dataRequirements}/>

            {/* Emissions Profile & Green Energy Matching: */}
            <FindingsTable data={emissionsProfile}/>

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
