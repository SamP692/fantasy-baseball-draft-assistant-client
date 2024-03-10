/* Config */
import appConfig from "app-config"

/* Domain */
import ensureKeyExists from "domain/localStorage/management/ensure-key-exists"

/* Update Player */
function updatePlayer(playerId, dataKey, value) {
    ensureKeyExists(appConfig.localStorage.keys.players, {})

    const playerChanges = JSON.parse(localStorage.getItem(appConfig.localStorage.keys.players))

    const existingPlayer = playerChanges[playerId] || {}

    const updatedPlayer = {
        ...existingPlayer,
        [dataKey]: value
    }

    const updatedPlayerChanges = {
        ...playerChanges,
        [playerId]: updatedPlayer
    }

    const stringifiedChanges = JSON.stringify(updatedPlayerChanges)

    localStorage.setItem(appConfig.localStorage.keys.players, stringifiedChanges)
}

export default updatePlayer
