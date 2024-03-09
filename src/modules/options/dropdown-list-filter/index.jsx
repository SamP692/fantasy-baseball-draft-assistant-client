/* Core Libraries */
import { h } from "preact"

/* Styles */
import "./dropdown-list-filter.css"

/* Dropdown Filter List */
function DropdownListFilter({ options, id, children, onChange }) {
    if (!id) {
        throw new Error("DropdownListFilter requires an id prop")
    }

    return (
        <fragment>
            <label className="dropdown-list-filter" htmlFor={id}>{children}</label>

            <select className="dropdown-list-filter" id={id} onChange={onChange}>
                {options.map(({ value, label, selected }) => (
                    <option value={value} selected={selected} key={value}>
                        {label}
                    </option>)
                )}
            </select>
        </fragment>
    )
}

export default DropdownListFilter
