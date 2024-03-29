/* Core Libraries */
import { h, createContext } from "preact"
import { useState, useEffect } from "preact/hooks"

/* Domain */
import sortPlayers from "domain/players/data/sort"

/* Data */
import getBatters from "domain/batters/get"
import getPitchers from "domain/pitchers/get"

/* Storage */
import updateStoredPlayerChanges from "domain/localStorage/players/update"

/* Batters Context */
export const PlayersContext = createContext({
    loading: true,
    playerCategory: "batters",
    players: null,
    hideIgnoredPlayers: true
})

/* Players Provider */
export function PlayersProvider({ children }) {
    /* Data */
    const [playerCategory, setPlayerCategory] = useState("batters")
    const [players, setPlayers] = useState(null)

    /* App State */
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [shouldUpdate, setShouldUpdate] = useState(true)

    /* Filters */
    const [positionFilter, setPositionFilter] = useState(null)
    const [filterOnlyKnownKeepers, setFilterOnlyKnownKeepers] = useState(false)
    const [filterExpectedKeepers, setFilterExpectedKeepers] = useState(false)
    const [hideUnavailable, setHideUnavailable] = useState(false)
    const [hideIgnoredPlayers, setHideIgnoredPlayers] = useState(true)

    /* Sorting */
    const [sortColumn, setSortColumn] = useState(null)

    /* View */
    const [hiddenColumns, setHiddenColumns] = useState([])

    /* Function Update Player */
    function updatePlayer(playerId, dataKey, value) {
        const updatedPlayers = players.map(player => {
            if (player.id === playerId) {
                return {
                    ...player,
                    [dataKey]: value
                }
            }

            return player
        })

        setPlayers(updatedPlayers)
        updateStoredPlayerChanges(playerId, dataKey, value)
    }

    /* Sort Column */
    function updatePlayerSorting() {
        const [dataKey, direction] = sortColumn

        const sortedPlayers = [ ...sortPlayers(players, dataKey, direction) ]

        setPlayers(sortedPlayers)
    }

    /* Update Players on Sort Change */
    useEffect(() => {
        if (sortColumn) {
            updatePlayerSorting()
        }
    }, [sortColumn])

    /* Get Players */
    async function fetchPlayers() {
        if (shouldUpdate) {
            setShouldUpdate(false)
            setLoading(true)

            const filters = {
                position: positionFilter,
                onlyKnownKeepers: filterOnlyKnownKeepers,
                expectedKeepers: filterExpectedKeepers
            }

            try {
                const players = playerCategory === "batters" ?
                    await getBatters(filters) :
                    await getPitchers(filters)

                setPlayers(players)
            } catch (error) {
                console.error(error)

                setError(error)
            }

            setLoading(false)
        }
    }

    /* Update Players on Category Change or Filter Change */
    useEffect(() => {
        fetchPlayers()
    }, [shouldUpdate])

    return (
        <PlayersContext.Provider value={{ 
            loading,
            setLoading,
            error,
            setError,

            setShouldUpdate,

            sortColumn,
            setSortColumn,

            playerCategory,
            setPlayerCategory,
            
            players,
            updatePlayer,

            hideIgnoredPlayers,
            setHideIgnoredPlayers,

            positionFilter,
            setPositionFilter,
            
            filterOnlyKnownKeepers,
            setFilterOnlyKnownKeepers,
            
            filterExpectedKeepers,
            setFilterExpectedKeepers,

            hideUnavailable,
            setHideUnavailable,

            hiddenColumns,
            setHiddenColumns
        }}>
            {children}
        </PlayersContext.Provider>
    )
}
