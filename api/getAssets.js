import { FGStorage } from "@co2-storage/js-api"
import { create, create as createClient } from 'ipfs-http-client'
import { CID } from 'multiformats/cid'

export const getAsset = async () => {

    console.log(process.env.ALCHEMY_ID)

    const authType = "pk"
    const ipfsNodeType = "client"
    const ipfsNodeAddr = "/dns4/web2.co2.storage/tcp/5002/https"
    const fgApiUrl = "https://co2.storage"

    const fgStorage = new FGStorage({authType: authType, ipfsNodeType: ipfsNodeType, ipfsNodeAddr: ipfsNodeAddr, fgApiHost: fgApiUrl})

    /**
     * Search assets
     * parameters: (chainName, phrases, cid, name, base, account, offset, limit, sortBy, sortDir)
     * // default data_chain: 'sandbox', phrases: null, cid: null, name: null, base: null, account: null, offset: 0, limit: 10
     */
    let searchAssetsResponse = await fgStorage.searchAssets('SP Audits')    // ('SP Audits', 'Water')
    if(searchAssetsResponse.error != null) {
        console.error(searchAssetsResponse.error)
        await new Promise(reject => setTimeout(reject, 300));
        process.exit()
    }
    console.log("Searching Assets");

    /**
     * Get asset
     * parameters: asset block CID
     */
    
    let totalResponses = [];

    for(let i = 0; i < searchAssetsResponse.result.assets.length; i++){

        console.dir("ASSET #:", i,  " \n");
        const listedAsset = searchAssetsResponse.result.assets[i]
        if(listedAsset) {
            let getAssetResponse = await fgStorage.getAsset(listedAsset.block)
            if(getAssetResponse.error != null) {
                console.error(getAssetResponse.error)
                await new Promise(reject => setTimeout(reject, 300));
                process.exit()
            }


            totalResponses.push(getAssetResponse);    
            console.dir(getAssetResponse.result, {depth: null})
        } 
    }

    await new Promise(resolve => setTimeout(resolve, 1000));

    return totalResponses;
};

getAsset();