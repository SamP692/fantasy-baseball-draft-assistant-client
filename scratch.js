/**
 *  Browser Script Tools
 */

/* Update Stored Record */
function updateStoredRecord(args) {
    const badKey = Object.keys(args).filter(key => !["id", "ignore", "team", "fantasyTeam", "keeperRound", "positions"].includes(key))

    if (badKey.length > 0) {
        console.error("Invalid key(s):", badKey.join(", "))
    }

    const { id, ignore, team, fantasyTeam, keeperRound, positions } = args

    if (typeof id !== "string") {
        throw new Error("id must be a string")
    }

    if (ignore !== undefined && typeof ignore !== "boolean") {
        throw new Error("ignore must be a boolean")
    }

    if (team !== undefined && typeof team !== "string") {
        throw new Error("team must be a string")
    }

    if (fantasyTeam !== undefined && typeof fantasyTeam !== "string") {
        throw new Error("fantasyTeam must be a string")
    }

    if (keeperRound !== undefined && typeof keeperRound !== "number") {
        throw new Error("keeperRound must be a number")
    }

    if (positions !== undefined && !Array.isArray(positions)) {
        throw new Error("positions must be an array")
    }

    const record = { }

    if (ignore !== undefined) {
        record.ignore = ignore
    }

    if (team !== undefined) {
        record.team = team
    }

    if (fantasyTeam !== undefined) {
        record.currentFantasyTeam = fantasyTeam
    }

    if (keeperRound !== undefined) {
        record.keeperRound = keeperRound
    }

    if (positions !== undefined) {
        record.yahooPositions = positions
    }

    const existingLocallyStoredData = JSON.parse(localStorage.getItem("players")) || {}
                
    const updatedRecords = {
        ...existingLocallyStoredData,
        [id]: record
    }
                
    const stringifiedUpdate = JSON.stringify(updatedRecords)

    localStorage.setItem("players", stringifiedUpdate)
}

/* Find Yahoo Keepers */
function updateFaRecord(args) {
    const badKey = Object.keys(args).filter(key => 
        !["id", "team", "positions"].includes(key)
    )

    if (badKey.length > 0) {
        console.error("Invalid key(s):", badKey.join(", "))
    }

    const { id, team, positions } = args

    if (typeof id !== "string") {
        throw new Error("id must be a string")
    }

    if (typeof team !== "string") {
        throw new Error("team must be a string")
    }

    if (!Array.isArray(positions)) {
        throw new Error("positions must be an array")
    }

    const record = {
        fantasyTeam: "FA"
    }

    if (team !== undefined) {
        record.team = team
    }

    if (positions !== undefined) {
        record.yahooPositions = positions
    }

    const existingLocallyStoredData = JSON.parse(localStorage.getItem("players")) || {}
                
    const updatedRecords = {
        ...existingLocallyStoredData,
        [id]: record
    }
                
    const stringifiedUpdate = JSON.stringify(updatedRecords)

    localStorage.setItem("players", stringifiedUpdate)
}
