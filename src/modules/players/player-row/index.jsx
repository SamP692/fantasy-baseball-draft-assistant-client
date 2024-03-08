/* Core Libraries */
import { h } from "preact"

/* Styles */
import "./player-row.css"

/*  */
function PlayerRow({ children }) {
    return (
        <tr className="player-row">
            {children}
        </tr>
    )
}

export default PlayerRow
