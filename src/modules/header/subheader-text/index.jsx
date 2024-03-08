/* Core Libraries */
import { h } from "preact"

/* Styles */
import "./subheader-text.css"

/* Subheader Text */
function SubheaderText({ children }) {
    return (
        <h2 id="subheader-text">
            {children}
        </h2>
    )
}

export default SubheaderText
