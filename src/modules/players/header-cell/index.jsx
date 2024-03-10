/* Core Libraries */
import { h } from "preact"

/* Styles */
import "./header-cell.css"

/* Header Cell */
function HeaderCell({ children, dataKey, onClick }) {
    function handleClick() {
        onClick(dataKey)
    }

    return (
        <th className="header-cell" onClick={handleClick}>
            {children}
        </th>
    )
}

export default HeaderCell
