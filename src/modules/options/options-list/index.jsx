/* Core Libraries */
import { h } from "preact"

/* Styles */
import "./options-list.css"

/* Options List */
function OptionsList({ children }) {
    return (
        <article id="options-list">
            {children}
        </article>
    )
}

export default OptionsList
