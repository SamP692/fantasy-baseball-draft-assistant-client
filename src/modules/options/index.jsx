/* Core Libraries */
import { h } from "preact"
import { useState, useContext, useEffect } from "preact/hooks"

/* Contexts */
import { PlayersContext } from "contexts/players"

/* Components */
import Container from "./container"
import Header from "./header"
import OptionsList from "./options-list"
import DropdownListFilter from "./dropdown-list-filter"
import ChangeViewButton from "./change-view-button"

/* Structures */
import BATTER_POSITIONS from "structures/batter-positions"
import PITCHER_POSITIONS from "structures/pitcher-positions"

/* Text */
const text = {
    title: "Controls"
}

/* Build Position Options */
function buildPositionOptions(playerCategory, positionFilter) {
    const defaultList = playerCategory === "batters" ? BATTER_POSITIONS : PITCHER_POSITIONS

    if (!positionFilter) return defaultList

    const updatedList = defaultList.map(({ value, label }) => ({
        value,
        label,
        selection: value === positionFilter
    }))

    return updatedList
}

/* Options */
function Options() {
    const {
        setLoading,
        playerCategory,
        setPlayerCategory,
        positionFilter,
        setPositionFilter,
        setShouldUpdate
    } = useContext(PlayersContext)

    const [positionList, setPositionList] = useState(buildPositionOptions(playerCategory, positionFilter))

    /* Update Selected Item in Position List */
    useEffect(() => {
        setPositionList(buildPositionOptions(playerCategory, positionFilter))
    }, [positionFilter])

    /* Handle View Change */
    function handleViewChange() {
        setLoading(true)

        const changingToPitcherView = playerCategory === "batters"
        if (changingToPitcherView) {
            setPositionFilter("SP")
        }

        
        setPlayerCategory(playerCategory === "batters" ? "pitchers" : "batters")
        setShouldUpdate(true)
    }

    function handlePositionFilter(event) {
        const position = event.target.value

        setLoading(true)
        setPositionFilter(position)
        setShouldUpdate(true)
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
            </OptionsList>
        </Container>
    )
}

export default Options
