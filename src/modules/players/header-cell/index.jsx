/* Core Libraries */
import { h } from "preact"

/* Styles */
import "./header-cell.css"

/* Header Cell */
function HeaderCell({ children }) {
    return (
        <th className="header-cell">
            {children}
        </th>
    )
}

export default HeaderCell
