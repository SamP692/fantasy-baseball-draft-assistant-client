/* Core Libraries */
import { h, createContext } from "preact"
import { useState, useEffect } from "preact/hooks"

/* Data */
import getBatters from "data/batters/get"
import getPitchers from "data/pitchers/get"

/* Batters Context */
export const PlayersContext = createContext({
    loading: true,
    playerCategory: "batters",
    players: null
})

/* Batters Provider */
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

    /* Get Players */
    async function fetchPlayers() {
        if (shouldUpdate) {
            setShouldUpdate(false)
            setLoading(true)

            const filters = {
                positions: positionFilter,
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

            playerCategory,
            setPlayerCategory,
            
            players,

            positionFilter,
            setPositionFilter,
            
            filterOnlyKnownKeepers,
            setFilterOnlyKnownKeepers,
            
            filterExpectedKeepers,
            setFilterExpectedKeepers
        }}>
            {children}
        </PlayersContext.Provider>
    )
}
