/* Config */
import appConfig from "app-config"

/* Build Filters String */
function buildFiltersString({ position, knownKeepers, expectedKeepers }) {
    const filterStrings = []

    if (position) {
        filterStrings.push(`position=${position}`)
    }

    if (knownKeepers) {
        filterStrings.push("knownKeepers=true")
    }

    if (expectedKeepers) {
        filterStrings.push("&expectedKeepers=true")
    }

    if (filterStrings.length === 0) return null

    return filterStrings.join("&")
}

/* Get Batters */
async function getBatters({ position, knownKeepers, expectedKeepers }) {
    const filterQueryString = buildFiltersString({ position, knownKeepers, expectedKeepers })

    const endpointUrl = filterQueryString ? `batters?${filterQueryString}` : "batters"
    const requestUrl = `${appConfig.api.url}/${endpointUrl}`

    const response = await fetch(requestUrl)
    const data = await response.json()

    const batters = data.data

    return batters
}

export default getBatters
