/* Config */
import appConfig from "app-config"

/* Domain */
import buildFiltersString from "domain/api/players/filters/query/build"

/* Get Players */
async function getPlayers(playerCategory, filters) {
    const filterQueryString = buildFiltersString(filters)

    const endpointUrl = filterQueryString ?
        `${playerCategory}?${filterQueryString}` :
        playerCategory
    const requestUrl = `${appConfig.api.url}/${endpointUrl}`
    
    const response = await fetch(requestUrl)
    const data = await response.json()

    const players = data.data

    return players
}

export default getPlayers
