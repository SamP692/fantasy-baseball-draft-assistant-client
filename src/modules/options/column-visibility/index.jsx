/* Core Libraries */
import { h } from "preact"

/* Styles */
import "./column-visibility.css"

/* Behaviors */
function filterHideableColumns(columns) {
    return columns.filter(column => column.hideable)
}

/* Column Visibility Filter */
function ColumnVisibility({ off, columns, onChange, hiddenColumns }) {
    if (off) return null

    const hideableColumns = filterHideableColumns(columns)

    function createColumnVisibilityChangeHandler(column) {
        function handleColumnVisibilityChange() {
            onChange(column.dataKey)
        }
        
        return handleColumnVisibilityChange
    }

    return (
        <div id="column-visibility">
            <table id="column-visibility">
                <thead>
                    <tr>
                        {hideableColumns.map(c => (
                            <th key={c.dataKey}>
                                <span>{c.header}</span>
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        {hideableColumns.map(c => {
                            const isChecked = !hiddenColumns.includes(c.dataKey)

                            return (
                                <td key={c.dataKey}>
                                    <input
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={createColumnVisibilityChangeHandler(c)}
                                    />
                                </td>
                            )
                        })}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ColumnVisibility
