/* Core Libraries */
import { h } from "preact"

/* Styles */
import "./container.css"

/* Container */
function Container({ children }) {
    return (
        <section id="options-container">
            {children}
        </section>
    )
}

export default Container
