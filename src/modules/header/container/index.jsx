/* Core Libraries */
import { h } from "preact"

/* Styles */
import "./container.css"

/* Container */
function Container({ children }) {
    return (
        <header id="header-container">
            {children}
        </header>
    )
}

export default Container
