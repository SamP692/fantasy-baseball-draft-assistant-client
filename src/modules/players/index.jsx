/* Core Libraries */
import { h } from "preact"
import { useContext, useState, useEffect } from "preact/hooks"

/* Configs */
import generateBattersColumns from "domain/batters/columns/generate"
import generatePitchersColumns from "domain/pitchers/columns/generate"

/* Contexts */
import { PlayersContext } from "contexts/players"

/* Components */
import PlayersTable from "./table"
import HeaderRow from "./header-row"
import HeaderCell from "./header-cell"
import PlayerRow from "./player-row"
import PlayerCell from "./player-cell"
import SortLoadingNotification from "./sort-loading-notification"

/* Behaviors */
function buildHeaderCells(playerCategory, onClick) {
    const columns = playerCategory === "batters" ? generateBattersColumns() : generatePitchersColumns()

    const orderedColumns = columns.sort((a, b) => a.displayOrder - b.displayOrder)

    const cells = orderedColumns.map((col) => (
        <HeaderCell key={col.dataKey} dataKey={col.dataKey} onClick={onClick}>
            {col.header}
        </HeaderCell>
    ))

    return cells
}

function buildPlayerCellConstructor(playerCategory, rawValues = false) {
    const columns = playerCategory === "batters" ? generateBattersColumns(rawValues) : generatePitchersColumns(rawValues)

    const orderedColumns = columns.sort((a, b) => a.displayOrder - b.displayOrder)
    
    function buildPlayerCells(player) {
        const cells = orderedColumns.map((col) => {
            let cellValue = Array.isArray(col.dataKey) ? col.dataKey.map((key) => player[key]) : player[col.dataKey]
            
            if (col.viewDataTransformation) {
                cellValue = col.viewDataTransformation(cellValue)
            }
            
            return (
                <PlayerCell key={col.dataKey} col={col.dataKey} colorScale={col.colorScale} dataType={col.dataType}>
                    {cellValue}
                </PlayerCell>
            )
        })
    
        return cells
    }

    return buildPlayerCells
}

/* Text */
const text = {
    sortLoading: "Sorting..."
}

/* Players */
function Players() {
    const {
        players,
        loading,
        playerCategory,
        sortColumn,
        setSortColumn,
        hideUnavailable
    } = useContext(PlayersContext)
    const [sortLoading, setSortLoading] = useState(false)

    /* Player Cells */
    const buildPlayerCells = buildPlayerCellConstructor(playerCategory)

    /* Handle Column Sort */
    function handleColumnSort(column) {
        setSortLoading(true)

        if (!sortColumn) {
            setSortColumn([column, "desc"])
        } else {
            const [columnKey, direction] = sortColumn

            /* TEMP: Right now only one column is calculated by two column keys */
            const changingSameColumnSort = (Array.isArray(columnKey) && Array.isArray(column)) || columnKey === column
            if (changingSameColumnSort) {
                const newDirection = direction === "asc" ? "desc" : "asc"
    
                setSortColumn([column, newDirection])
            } else {
                setSortColumn([column, "desc"])
            }
        }
    }

    useEffect(() => {
        setSortLoading(false)
    }, [players])

    if (loading || !players) {
        return <p>Loading</p>
    }

    return (
        <section>
            <PlayersTable>
                <thead>
                    <HeaderRow>
                        {buildHeaderCells(playerCategory, handleColumnSort)}
                    </HeaderRow>
                </thead>

                <tbody>
                    {sortLoading && (
                        <SortLoadingNotification>
                            {text.sortLoading}
                        </SortLoadingNotification>
                    )}
                    {players.map((batter) => {
                        if (hideUnavailable && batter.expectedKeeper) return null

                        return (
                            <PlayerRow key={batter.id}>
                                {buildPlayerCells(batter)}
                            </PlayerRow>
                        )})}
                </tbody>
            </PlayersTable>
        </section>
    )
}

export default Players
