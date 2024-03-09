/* Config */
import appConfig from "app-config"

/* Build Filters String */
function buildFiltersString({ position, knownKeepers, expectedKeepers }) {
    let filtersString = ""

    if (position) {
        filtersString += `&position=${position}`
    }

    if (knownKeepers) {
        filtersString += "&knownKeepers=true"
    }

    if (expectedKeepers) {
        filtersString += "&expectedKeepers=true"
    }

    return filtersString === "" ? null : filtersString
}

/* Get Pitchers */
async function getPitchers({ position, knownKeepers, expectedKeepers }) {
    const filterQueryString = buildFiltersString({ position, knownKeepers, expectedKeepers })

    const endpointUrl = filterQueryString ? `pitchers?${filterQueryString}` : "pitchers"
    const requestUrl = `${appConfig.api.url}/${endpointUrl}`

    const response = await fetch(requestUrl)
    const data = await response.json()

    const batters = data.data

    return batters
}

export default getPitchers
