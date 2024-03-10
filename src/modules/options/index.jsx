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

    /* Handle Position Filter */
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
