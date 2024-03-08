/* Core Libraries */
import { h } from "preact"

/* Styles */
import "./header-row.css"

/*  */
function HeaderRow({ children }) {
    return (
        <tr id="header-row">
            {children}
        </tr>
    )
}

export default HeaderRow
