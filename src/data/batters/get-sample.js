/* Config */
import appConfig from "app-config"

/* Get Sample Batter */
async function getSampleBatter(incomplete = false) {
    const requestEndpoint = incomplete ? "sample?incomplete=true" : "sample"
    const requestUrl = `${appConfig.api.url}/batters/${requestEndpoint}`

    const response = await fetch(requestUrl)
    const data = await response.json()

    const batter = data.data

    return batter
}

export default getSampleBatter
