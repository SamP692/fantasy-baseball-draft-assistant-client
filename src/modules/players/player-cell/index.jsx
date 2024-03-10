/* Core Libraries */
import { h } from "preact"

/* Domain */
import dataValueTypes from "domain/players/data/types"

/* Styles */
import "./player-cell.css"

/* Behaviors */
function limitNumberSize(num) {
    const isNum = typeof num === "number"

    if (isNum) {
        const isInteger = Number.isInteger(num)

        if (isInteger) return num

        const limitedNumber = num.toFixed(2)

        return limitedNumber
    }

    return num
}

/* Player Cell */
function PlayerCell({ children, dataType }) {
    if (dataType === dataValueTypes.bool) {
        return (
            <td className="player-cell bool">
                <input type="checkbox" checked={children} />
            </td>
        
        )
    }
    
    const dataTypeClass = dataType === dataValueTypes.num ? "num" : "str"

    return (
        <td className={`player-cell ${dataTypeClass}`}>
            <div>
                {limitNumberSize(children)}
            </div>
        </td>
    )
}

export default PlayerCell
