/* Config */
import appConfig from "app-config"

/* Domain */
import ensureKeyExists from "domain/localStorage/management/ensure-key-exists"

/* Get Players */
function getPlayers() {
    ensureKeyExists(appConfig.localStorage.keys.players, {})

    const playerChanges = JSON.parse(localStorage.getItem(appConfig.localStorage.keys.players))

    return playerChanges
}

export default getPlayers
