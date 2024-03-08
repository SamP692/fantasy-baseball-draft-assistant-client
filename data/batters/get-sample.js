/* Config */
import appConfig from "app-config"

/* Get Sample Batter */
async function getSampleBatter() {
    const response = await fetch(`${appConfig.api.url}/batters/sample`)

    const data = await response.json()

    const batter = data.data

    console.log(data)

    return batter
}

export default getSampleBatter
