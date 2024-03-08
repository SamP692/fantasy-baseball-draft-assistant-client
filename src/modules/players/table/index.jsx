/* Core Libraries */
import { h } from "preact"

/* Styles */
import "./players-table.css"

/* Players Table */
function PlayersTable({ children }) {
    return (
        <table id="players-table">
            {children}
        </table>
    )
}

export default PlayersTable
