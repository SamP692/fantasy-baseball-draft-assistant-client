/* Sort Players */
function sortPlayers(players, columnKey, direction) {
    console.log(columnKey)

    const sortedPlayers = players.sort((a, b) => {
        const aVal = a[columnKey]
        const bVal = b[columnKey]

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
