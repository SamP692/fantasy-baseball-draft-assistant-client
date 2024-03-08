/* Core Libraries */
import { h } from "preact"

/* Styles */
import "./header.css"

/* Header */
function Header({ children }) {
    return (
        <h3 id="options-header">
            {children}
        </h3>
    )
}

export default Header
