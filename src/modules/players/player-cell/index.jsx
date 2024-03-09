/* Core Libraries */
import { h } from "preact"

/* Structures */
import { columnDataTypes } from "structures/batter-columns"

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
    if (dataType === columnDataTypes.bool) {
        return (
            <td className="player-cell bool">
                <input type="checkbox" checked={children} />
            </td>
        
        )
    }
    
    const dataTypeClass = dataType === columnDataTypes.num ? "num" : "str"

    return (
        <td className={`player-cell ${dataTypeClass}`}>
            <div>
                {limitNumberSize(children)}
            </div>
        </td>
    )
}

export default PlayerCell
