/* Config */
import appConfig from "app-config"

/* Build Filters String */
function buildFiltersString({ positions, knownKeepers, expectedKeepers }) {
    let filtersString = ""

    if (positions) {
        filtersString += `&positions=${positions.join(",")}`
    }

    if (knownKeepers) {
        filtersString += `&knownKeepers=true}`
    }

    if (expectedKeepers) {
        filtersString += `&expectedKeepers=true}`
    }

    return filtersString === "" ? null : filtersString
}

/* Get Sample Batter */
async function getBatters({ positions, knownKeepers, expectedKeepers }) {
    const filterQueryString = buildFiltersString({ positions, knownKeepers, expectedKeepers })

    const endpointUrl = filterQueryString ? `batters?${filterQueryString}` : `batters`
    const requestUrl = `${appConfig.api.url}/${endpointUrl}`

    const response = await fetch(requestUrl)
    const data = await response.json()

    const batters = data.data

    return batters
}

export default getBatters
