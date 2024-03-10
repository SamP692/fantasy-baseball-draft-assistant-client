/* Domain */
import BATTER_POSITIONS from "domain/batters/positions/static-list"
import PITCHER_POSITIONS from "domain/pitchers/positions/static-list"

/* Build Position Options */
function buildPositionOptions(playerCategory, positionFilter) {
    const defaultList = playerCategory === "batters" ? BATTER_POSITIONS : PITCHER_POSITIONS

    if (!positionFilter) return defaultList

    const updatedList = defaultList.map(({ value, label }) => ({
        value,
        label,
        selection: value === positionFilter
    }))

    return updatedList
}

export default buildPositionOptions
