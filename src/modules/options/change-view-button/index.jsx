/* Core Libraries */
import { h } from "preact"

/* Styles */
import "./change-view-button.css"

/* Change View Button */
function ChangeViewButton({ children, onClick }) {
    return (
        <button onClick={onClick} className="change-view">
            {children}
        </button>
    )
}

export default ChangeViewButton
