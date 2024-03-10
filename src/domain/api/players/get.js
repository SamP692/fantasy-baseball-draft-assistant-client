/* Config */
import appConfig from "app-config"

/* Domain */
import buildFiltersString from "domain/api/players/filters/query/build"
import getLocalStoragePlayerChanges from "domain/localStorage/players/get"

/* Patch From Local Storage */
function patchPlayersFromLocalStorage(databasePlayers) {
    const localStoragePlayerChanges = getLocalStoragePlayerChanges()

    const patchedPlayers = databasePlayers.map(player => {
        const playerChanges = localStoragePlayerChanges[player.id] || {}

        return {
            ...player,
            ...playerChanges
        }
    })

    return patchedPlayers
}

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

    const patchedPlayers = patchPlayersFromLocalStorage(players)

    return patchedPlayers
}

export default getPlayers
