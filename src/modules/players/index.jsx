/* Core Libraries */
import { h } from "preact"
import { useContext } from "preact/hooks"

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
                <PlayerCell key={col.dataKey} dataType={col.dataType}>
                    {cellValue}
                </PlayerCell>
            )
        })
    
        return cells
    }

    return buildPlayerCells
}

/* Players */
function Players() {
    const { players, loading, playerCategory } = useContext(PlayersContext)

    const buildPlayerCells = buildPlayerCellConstructor(playerCategory)

    function handleColumnSort(data) {
        console.log(data)
    }

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
                    {players.map((batter) => (
                        <PlayerRow key={batter.id}>
                            {buildPlayerCells(batter)}
                        </PlayerRow>
                    ))}
                </tbody>
            </PlayersTable>
        </section>
    )
}

export default Players
