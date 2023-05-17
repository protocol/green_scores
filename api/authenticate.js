import { Auth } from '@co2-storage/js-api'

export const authenticate = async () => {

    const authType = "pk"
    const auth = new Auth(authType)

    /**
     * Authenticate with a private key
     */

    let authResponse = await auth.authenticate()

    if(authResponse.error != null) {
        console.error(authResponse.error)
        await new Promise(reject => setTimeout(reject, 300));
    }

    console.dir(authResponse.result, {depth: null})
    console.log(authResponse);
    await new Promise(resolve => setTimeout(resolve, 1000));

}

authenticate();