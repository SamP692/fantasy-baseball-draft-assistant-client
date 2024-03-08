/* Core Libraries */
import { h } from "preact"

/* Structures */
import { columnDataTypes } from "structures/batter-columns"

/* Styles */
import "./player-cell.css"

/* Player Cell */
function PlayerCell({ children, dataType }) {
    console.log(dataType)

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
            {children}
        </td>
    )
}

export default PlayerCell
