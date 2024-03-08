/* Core Libraries */
import { h } from "preact"
import { useEffect } from "preact/hooks"

/* Configs */
import batterColummns from "structures/batter-columns"

/* Hooks */
import useSampleBatter from "hooks/useSampleBatter"

/* Components */
import PlayersTable from "./table"
import HeaderRow from "./header-row"
import HeaderCell from "./header-cell"
import PlayerRow from "./player-row"
import PlayerCell from "./player-cell"

/* Behaviors */
function buildHeaderCells() {
    const orderedColumns = batterColummns.sort((a, b) => a.displayOrder - b.displayOrder)

    const cells = orderedColumns.map((col) => (
        <HeaderCell key={col.dataKey}>
            {col.header}
        </HeaderCell>
    ))

    return cells
}

function buildPlayerCells(player) {
    const orderedColumns = batterColummns.sort((a, b) => a.displayOrder - b.displayOrder)

    const cells = orderedColumns.map((col) => {
        let cellValue = player[col.dataKey]
        
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

/* Players */
function Players() {
    const sampleBatter = useSampleBatter()
    const incompleteSampleBatter = useSampleBatter(true)

    useEffect(() => {
        console.log("====")

        console.log("Sample Batter", sampleBatter)
        console.log("Incomplete Sample Batter", incompleteSampleBatter)
    }, [incompleteSampleBatter])

    if (sampleBatter.loading || incompleteSampleBatter.loading) {
        return <p>Loading</p>
    }

    if (sampleBatter.error || sampleBatter.error) {
        return <p>Error</p>
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
                    <PlayerRow>
                        {buildPlayerCells(sampleBatter.batter)}
                    </PlayerRow>
                        
                    <PlayerRow>
                        {buildPlayerCells(incompleteSampleBatter.batter)}
                    </PlayerRow>    
                </tbody>
            </PlayersTable>
        </section>
    )
}

export default Players
