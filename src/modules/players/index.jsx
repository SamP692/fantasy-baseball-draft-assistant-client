/* Core Libraries */
import { h } from "preact"
import { useContext } from "preact/hooks"

/* Configs */
import batterColumns from "structures/batter-columns"
import pitcherColumns from "structures/pitcher-columns"

/* Contexts */
import { PlayersContext } from "contexts/players"

/* Components */
import PlayersTable from "./table"
import HeaderRow from "./header-row"
import HeaderCell from "./header-cell"
import PlayerRow from "./player-row"
import PlayerCell from "./player-cell"

/* Behaviors */
function buildHeaderCells(playerCategory) {
    const columns = playerCategory === "batters" ? batterColumns() : pitcherColumns()

    const orderedColumns = columns.sort((a, b) => a.displayOrder - b.displayOrder)

    const cells = orderedColumns.map((col) => (
        <HeaderCell key={col.dataKey}>
            {col.header}
        </HeaderCell>
    ))

    return cells
}

function buildPlayerCellConstructor(playerCategory, rawValues = false) {
    const columns = playerCategory === "batters" ? batterColumns(rawValues) : pitcherColumns(rawValues)

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

    if (loading || !players) {
        return <p>Loading</p>
    }

    return (
        <section>
            <PlayersTable>
                <thead>
                    <HeaderRow>
                        {buildHeaderCells(playerCategory)}
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
