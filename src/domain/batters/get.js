/* Domain */
import getPlayers from "domain/api/players/get"

/* Get Batters */
async function getBatters(filters) {
    const batters = await getPlayers("batters", filters)

    return batters
}

export default getBatters
