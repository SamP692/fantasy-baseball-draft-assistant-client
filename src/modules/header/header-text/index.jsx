/* Core Libraries */
import { h } from "preact"

/* Styles */
import "./header-text.css"

/* Header Text */
function HeaderText({ children }) {
    return (
        <h1 id="header-text">
            {children}
        </h1>
    )
}

export default HeaderText
