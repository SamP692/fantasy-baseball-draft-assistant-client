/* Domain */
import getPlayers from "domain/api/players/get"

/* Get Pitchers */
async function getPitchers(filters) {
    const pitchers = await getPlayers("pitchers", filters)

    return pitchers
}

export default getPitchers
