/* Domain */
import isConfirmedFreeAgent from "domain/players/view-transformations/is-confirmed-free-agent"

/* Methods */
function isConfirmedFreeAgentColumn(columnKey) {
    const isMultipleKeys = Array.isArray(columnKey)

    if (!isMultipleKeys) return null

    const [keyA, keyB] = columnKey

    const isColumn = keyA === "currentFantasyTeam" && keyB === "keeperRound"

    return isColumn
}

function setConfirmedFreeAgentValue(player, columnKey) {
    const [keyA, keyB] = columnKey

    const isFreeAgent = isConfirmedFreeAgent([player[keyA], player[keyB]])

    return isFreeAgent ? 2 : 1
}

/* Sort Players */
function sortPlayers(players, columnKey, direction) {
    const isConfirmedFreeAgent = isConfirmedFreeAgentColumn(columnKey)

    console.log("Direction: ", direction)

    const sortedPlayers = players.sort((a, b) => {
        const aVal = isConfirmedFreeAgent ? setConfirmedFreeAgentValue(a, columnKey) : a[columnKey]
        const bVal = isConfirmedFreeAgent ? setConfirmedFreeAgentValue(b, columnKey) : b[columnKey]

        if (!aVal && bVal) return 1
        if (aVal && !bVal) return -1
        if (!aVal && !bVal) return 0

        if (direction === "asc") {
            if (aVal < bVal) return -1
            if (aVal > bVal) return 1
            return 0
        }

        if (direction === "desc") {
            if (aVal > bVal) return -1
            if (aVal < bVal) return 1
            return 0
        }
    })

    return sortedPlayers
}

export default sortPlayers
