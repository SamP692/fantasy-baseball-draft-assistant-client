/* Core Libraries */
import { h } from "preact"
import { useState, useContext, useEffect } from "preact/hooks"

/* Configs */
import generateBattersColumns from "domain/batters/columns/generate"
import generatePitchersColumns from "domain/pitchers/columns/generate"

/* Contexts */
import { PlayersContext } from "contexts/players"

/* Components */
import Container from "./container"
import Header from "./header"
import OptionsList from "./options-list"
import DropdownListFilter from "./dropdown-list-filter"
import ChangeViewButton from "./change-view-button"
import ColumnVisibility from "./column-visibility"

/* Helpers */
import buildPositionOptions from "./_helpers/build-position-options"

/* Text */
const text = {
    title: "Controls"
}

/* Options */
function Options() {
    const {
        setLoading,
        playerCategory,
        setPlayerCategory,
        positionFilter,
        setPositionFilter,
        setShouldUpdate,
        hiddenColumns,
        setHiddenColumns
    } = useContext(PlayersContext)
    const [positionList, setPositionList] = useState(buildPositionOptions(playerCategory, positionFilter))

    const columns = playerCategory === "batters" ? generateBattersColumns() : generatePitchersColumns()

    /* Update Selected Item in Position List */
    useEffect(() => {
        setPositionList(buildPositionOptions(playerCategory, positionFilter))
    }, [positionFilter])

    /* Handle View Change */
    function handleViewChange() {
        setLoading(true)

        const changingToPitcherView = playerCategory === "batters"
        const defaultPositionFilter = changingToPitcherView ? "SP" : null
        setPositionFilter(defaultPositionFilter)

        
        setPlayerCategory(playerCategory === "batters" ? "pitchers" : "batters")
        setShouldUpdate(true)
        setHiddenColumns([])
    }

    /* Handle Position Filter */
    function handlePositionFilter(event) {
        const position = event.target.value

        setLoading(true)
        setPositionFilter(position)
        setShouldUpdate(true)
    }

    /* Handle Hidden Column Change */
    function handleHiddenColumnChange(columnKey) {
        const isHidden = hiddenColumns.includes(columnKey)

        const newHiddenList = isHidden ?
            [...hiddenColumns.filter(c => c !== columnKey)] :
            [...hiddenColumns, columnKey]

        setHiddenColumns(newHiddenList)
    }

    return (
        <Container>
            <Header>
                {text.title}
            </Header>

            <ChangeViewButton onClick={handleViewChange}>
                {playerCategory === "batters" ? "View Pitchers" : "View Batters"}
            </ChangeViewButton>

            <OptionsList>
                <DropdownListFilter onChange={handlePositionFilter} options={positionList} id={"positions-list"}>
                    Position
                </DropdownListFilter>

                <ColumnVisibility off columns={columns} onChange={handleHiddenColumnChange} hiddenColumns={hiddenColumns} />
            </OptionsList>
        </Container>
    )
}

export default Options
