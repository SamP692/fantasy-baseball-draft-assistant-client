/* Core Libraries */
import { h } from "preact"

/* Styles */
import "./switch.css"

/* Switch */
function Switch({ children, checked, onChange }) {
    return (
        <div className="switch-container">
            <span className="switch-label">{children}</span>

            <label className="switch">
                <input type="checkbox" checked={checked} onClick={onChange} />
                
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default Switch
