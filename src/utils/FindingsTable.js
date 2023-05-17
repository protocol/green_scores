// Sustainability Tiers:
export const sustainabilityTiers = {
    bronze: {
        tier: "Bronze",
        image: "https://www.pngall.com/wp-content/uploads/2017/03/Bronze-Medal-Transparent.png",
    },
    silver: {
        tier: "Silver",
        image: "https://www.transparentpng.com/thumb/silver-medal/silver-medal-png-transparent-image--5.png",
    },
    gold: {
        tier: "Gold",
        image: "https://www.transparentpng.com/thumb/gold-medal/award-first-place-gold-medal-prize-winner-icon-png-11.png",
    },
    not_available: {
        tier: "N/A for 2022",
        image: "https://static.vecteezy.com/system/resources/thumbnails/010/950/671/small/3d-rendering-exclamation-mark-sign-icon-free-png.png",
    }
}

// Data Requirements:
export const dataRequirements = {
    criteria: "Data Requirements",
    titles: ["Tier", "Location", "Water Use", "Energy Use", "Renewables", "Hardware", "On-site Renewable Energy"],
    bronze : [
        "Approximate location is reported for EVP", 
        "Water use is reported for EVP",
        "Energy use is reported for EVP",
        "Renewable energy purchases are reported for EVP",
        "Not Applicable",
        "Not Applicable"
    ],
    silver : [
        "Approximate location is reported for EVP",
        "Granular water use is reported from utility bills for EVP",
        "Granular energy use is reported from utility bills for EVP",
        "Granular renewable energy purchases are reported for EVP",
        "Hardware setup (with pictures/videos) is provided for EVP",
        "Not Applicable"
    ],
    gold: [
        "Approximate location is reported for EVP",
        "Granular water use is reported from utility bills for EVP",
        "Granular energy use is reported from utility bills for EVP",
        "Granular renewable energy purchases are reported for EVP",
        "Hardware setup (with pictures/videos) is provided for EVP",
        "Renewable energy is generated on-site, and setup details or documentation of contract are provided for EVP"
    ],
    results : {
        findings: [
            "Address reported on Template",
            "N/A Water isn't used to cool Filecoin IT infrastructure",
            "Granular electricity consumption reported from utility bills and API in kWh",
            "Granular renewable energy purchases report in kWh on monthly power bills",
            "Details of hardware setup including rack config, minerIDs, and IP address provided",
            "Solar panels are installed on-site, project workbook and inspection report were provided, and Inverter API was provided",
        ], 
        dcent_tier: {
            tier: sustainabilityTiers.gold.tier,
            tier_img: sustainabilityTiers.gold.image,
        }
    }
};

// Emissions Profile: 
export const emissionsProfile = {
    criteria: "Emissions Profile",
    titles: ["Tier", "Methodology", "Frequency"],
    bronze : [
        "Market-based attributional carbon accounting approach",
        "Quarterly",
    ],
    silver : [
        "Market-based attributional carbon accounting approach",
        "Quarterly",
    ],
    gold: [
        "Consequential carbon accounting approach",
        "Quarterly",
    ],
    results : {
        findings: [
            "Carbon Accounting exercises will commence in 2023",
            "",
        ],
        dcent_tier: {
            tier: sustainabilityTiers.not_available.tier,
            tier_img: sustainabilityTiers.not_available.image,
        }
    }
};

// Green Energy Matching: 
export const energyMatching = {
    criteria: "Green Energy Matching",
    titles: ["Tier", "Matching", "Frequency"],
    bronze : [
        "Energy consumption profile is matched to Energy Attribution Credits (EAC) OR provide evidence of green electricity products from their energy supplier",
        "Annual",
    ],
    silver : [
        "Energy consumption profile is matched to Energy Attribution Credits (EAC) OR provide evidence of green electricity products from their energy supplier",
        "Quarterly",
    ],
    gold: [
        "Every kWh is matched by onsite renewable energy generation (see reporting methods) OR emissions due to grid draw must be matched to avoided emissions accounted for by GCs, with a temporal resolution of one hour, obtained either through: i. Power Purchase Agreements (PPAs) for new generation ii. GCs sold on the open market",
        "Quarterly",
    ],
    results : {
        findings: [
            "Renewable energy reported on monthly power bills, pending certificates from utility provider",
            "Quarterly",
        ],
        dcent_tier: {
            tier: sustainabilityTiers.silver.tier,
            tier_img: sustainabilityTiers.silver.image,
        }
    }
};


// Embodied Emissions:
export const embodiedEmissions = {
    criteria: "Embodied Emissions",
    titles: ["Tier", "Hardware Specs Required for LCA", "Carbon Credits"],
    bronze : [
        "N/A: Refer to Green Guidance Docs",
        "N/A: Refer to Green Guidance Docs",
    ],
    silver : [
        "Hardware configuration required for Embodied Emissions Life-Cycle Analysis (LCA) are provided to Filecoin Green",
        "Hardware embodied emissions are matched to high-quality carbon credits (removals or offsets), per Annex 3 in Green Guidance",
    ],
    gold: [
        "Hardware configuration required for Embodied Emissions Life-Cycle Analysis (LCA) are provided to Filecoin Green",
        "Hardware embodied emissions are matched to high-quality carbon credits (removals or offsets) curated by Filecoin Green, per Annex 3 in Green Guidance",
    ],
    results : {
        findings: [
            "Embodied emissions work will commence in 2023",
            "N/A.",
        ],
        dcent_tier: {
            tier: sustainabilityTiers.not_available.tier,
            tier_img: sustainabilityTiers.not_available.image,
        }
    }
};

// Reporting Methods:
export const reportingMethods = {
    criteria: "Reporting Methods",
    titles: ["Tier", "Location", "Water Use","Energy Use", "Renewables", "Hardware"],
    bronze : [
        "Location confirmed on monthly water or power bill, or documentation of contract",
        "Water bill or documentation of contract with water provider",
        "Power bill or documentation of contract with water provider",
        "Reported on power bill or contract from utility provider on renewables",
        "Not Applicable",

    ],
    silver : [
        "Location confirmed on monthly water or power bill, or documentation of contract",
        "Exact use reported on water bill, water meter data, and/or documetion of contract with provider",
        "Exact use reported on power bill, some electric meter data, and/or documetion of contract with provider",
        "Documentation of green electricity products from energy supplier, e.g., Green Tarriffs",
        "Details including pics or videos of hardware set-up",
    ],
    gold: [
        "Location confirmed on monthly water or power bill, or documentation of contract",
        "Exact use reported on water bill, water meter data, and/or documetion of contract with provider",
        "Comprehensive meter data is provided showing every kWh used",
        "Documentation of green electricity products from energy supplier, e.g., Green Tarriffs",
        "Details including pics or videos of hardware set-up",
    ],
    results : {
        findings: [
            "Utility bill from Nievwestroom provided",
            "N/A - Water is not used to cool hardware used for Filecoin network",
            "Metered solar and storage data is provided through API, pending sealing API data",
            "Renewable energy reported on power bills. Pending certificates from utility provider",
            "Detailed solar project workbook, inspection report, rack config, minerIDs, and IP addresses provided",
        ],
        dcent_tier: {
            tier: sustainabilityTiers.gold.tier,
            tier_img: sustainabilityTiers.gold.image,
        }
    }
};


// Auditing Process:
export const auditingProcess = {
    criteria: "Energy Validation Process {EVP}",
    titles: ["Tier", "Validation Type", "Frequency","Results"],
    bronze : [
        "Remote",
        "Yearly",
        "Energy Validation confirms location, water usage, energy consumption data, and renewable energy purchases by cross referencing all available materials",
    ],
    silver : [
        "Remote",
        "Quarterly",
        "Energy Validation confirms location, water usage, energy consumption data, and renewable energy purchases by cross referencing all available materials",

    ],
    gold: [
        "Remote & On-site",
        "Quarterly",
        "Energy Validation confirms location, water usage, energy consumption data, and renewable energy purchases by cross referencing all available materials",

    ],
    results : {
        findings: [
            "Remote",
            "Quarterly",
            "Location, electricity use, and renewable energy purchases confirmed by cross referencing utility bills, grid API data, solar API data, and estimated cumulative energy use data",
        ],
        dcent_tier: {
            tier: sustainabilityTiers.gold.tier,
            tier_img: sustainabilityTiers.gold.image,
        }
    }
};


// Audit Outputs for Landing:
export const audit_outputs = {
    audit_requirements: {
        title: "",
        description: "",
        body: 
        [
            {
                title: "",
                description: "",
            },
            {
                title: "",
                description: "",
            },
            {
                title: "",
                description: "",
            },
        ],
    },
    findings_summary: [
        {
            title: "Data Requirements", 
            description: "Storage provider met all minimum data requirements for location, water use, energry use, renewables, hardware, and on-site renewable energy."
        },
        {
            title: "Emissions Profile",
            description: "Carbon accounting and emissions profile exercises will start in 2023. Storage provider purchases renewable energy from utility company."
        },
        {
            title: "Embodied Emissions",
            description: "Embodied emissions work will start in 2023."
        },
        {
            title: "Reporting Methods",
            description: "Storage provider submitted monthly utility bills plus metered solar power generation and storage energy use data through API/web interface. Storage provider is working on meters to monitor sealing energy use."
        },
        {
            title: "Energy Validation Details",
            description: "Storage provider completed two quarterly remote EVPs, and provided login details to website to monitor solar power generation and storage energy use."
        },
    ], 
    recommendations: [
        {
            title: "Data Requirements", 
            description: "None."
        },
        {
            title: "Emissions Profile",
            description: "Carbon accounting and emission profile excercises will start in 2023. No additional action is needed at this time."
        },
        {
            title: "Embodied Emissions",
            description: "Embodied emissions work will start in 2023. No additional action is needed at this time."
        },
        {
            title: "Reporting Methods",
            description: "Complete meter installation and configuration to monitor sealing energy use."
        },
        {
            title: "Energy Validation Details",
            description: "Continue to provide utility bills on quarterly basis"
        },
    ]
};