/* Core Libraries */
import { h } from "preact"

/* Domain */
import dataValueTypes from "domain/players/data/types"
import limitNumberSize from "domain/data/view-transformations/limit-number-size"

/* Styles */
import "./player-cell.css"

/**
 * A color scale system I don't quite understand, but works
 *  Right now it's specific to standard deviations, and assumes a top of 4 and bottom of -4
 */
function lerp(start, end, t) {
    return start * (1 - t) + end * t
}

function getColor(value, preference) {
    const t = (value + 4) / 8

    const preferHigherNumbers = preference === "prefer high"

    const superiorColor = [255, 0, 0]
    const inferiorColor = [0, 0, 255]

    const startColor = preferHigherNumbers ? inferiorColor : superiorColor
    const endColor = preferHigherNumbers ? superiorColor : inferiorColor

    const r = Math.round(lerp(startColor[0], endColor[0], t))
    const g = Math.round(lerp(startColor[1], endColor[1], t))
    const b = Math.round(lerp(startColor[2], endColor[2], t))

    return `rgba(${r}, ${g}, ${b}, 0.7)`
}

function isMyPlayer(cellData) {
    const isNotString = typeof cellData !== "string"
    if (isNotString) return false

    const isMyPlayer = cellData.includes("Yandy's")

    return isMyPlayer
}

/* Player Cell */
function PlayerCell({ children, dataType, colorScale }) {
    if (dataType === dataValueTypes.bool) {
        return (
            <td className="player-cell bool">
                <input type="checkbox" checked={children} />
            </td>
        )
    }

    const isOnMyTeam = isMyPlayer(children)
    
    const dataTypeClass = dataType === dataValueTypes.num ? "num" : "str"

    const colorScaleColor = colorScale ? getColor(children, colorScale) : null
    const myTeamColor = isOnMyTeam ? "rgba(0, 255, 0, 0.7)" : null

    const backgroundColor = colorScaleColor || myTeamColor

    const styles = backgroundColor ? { backgroundColor, fontWeight: "bold" } : {}

    return (
        <td className={`player-cell ${dataTypeClass}`} style={styles}>
            <div>
                {limitNumberSize(children)}
            </div>
        </td>
    )
}

export default PlayerCell
