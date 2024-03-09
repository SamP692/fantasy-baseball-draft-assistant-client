/* Core Libraries */
import { h } from "preact"
import { useContext } from "preact/hooks"

/* Configs */
import batterColummns from "structures/batter-columns"

/* Contexts */
import { BattersContext } from "contexts/batters"

/* Components */
import PlayersTable from "./table"
import HeaderRow from "./header-row"
import HeaderCell from "./header-cell"
import PlayerRow from "./player-row"
import PlayerCell from "./player-cell"

/* Behaviors */
function buildHeaderCells() {
    const orderedColumns = batterColummns().sort((a, b) => a.displayOrder - b.displayOrder)

    const cells = orderedColumns.map((col) => (
        <HeaderCell key={col.dataKey}>
            {col.header}
        </HeaderCell>
    ))

    return cells
}

function buildPlayerCellConstructor(rawValues = false) {
    const orderedColumns = batterColummns(rawValues).sort((a, b) => a.displayOrder - b.displayOrder)
    
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
    const { batters, loading } = useContext(BattersContext)

    const buildPlayerCells = buildPlayerCellConstructor()

    if (loading || !batters) {
        return <p>Loading</p>
    }

    return (
        <section>
            <PlayersTable>
                <thead>
                    <HeaderRow>
                        {buildHeaderCells()}
                    </HeaderRow>
                </thead>

                <tbody>
                    {batters.map((batter) => (
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
