/* Core Libraries */
import { h } from "preact"

/* Styles */
import "./sort-loading-notification.css"

/* Sort Loading Notification */
function SortLoadingNotification({ children }) {
    return (
        <div id="sort-loading-notification">
            <h4>{children}</h4>
        </div>
    )
}

export default SortLoadingNotification
