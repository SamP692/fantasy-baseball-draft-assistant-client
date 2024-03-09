/* Core Libraries */
import { h, createContext } from "preact"
import { useState, useEffect } from "preact/hooks"

/* Data */
import getBatters from "data/batters/get"

/* Batters Context */
export const BattersContext = createContext({ batters: null, loading: true })

/* Batters Provider */
export function BattersProvider({ children }) {
    const [filterPositions, setFilterPositions] = useState(null)
    const [filterOnlyKnownKeepers, setFilterOnlyKnownKeepers] = useState(false)
    const [filterExpectedKeepers, setFilterExpectedKeepers] = useState(false)

    const [batters, setBatters] = useState(null)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchBatters() {
            setLoading(true)

            try {
                const batters = await getBatters({
                    positions: filterPositions,
                    onlyKnownKeepers: filterOnlyKnownKeepers,
                    expectedKeepers: filterExpectedKeepers
                })

                setBatters(batters)
            } catch (error) {
                console.error(error)
            }

            setLoading(false)
        }

        fetchBatters()
    }, [filterPositions, filterOnlyKnownKeepers, filterExpectedKeepers])

    return (
        <BattersContext.Provider value={{ 
            batters,
            filterPositions,
            setFilterPositions,
            filterOnlyKnownKeepers,
            setFilterOnlyKnownKeepers,
            filterExpectedKeepers,
            setFilterExpectedKeepers
        }}>
            {children}
        </BattersContext.Provider>
    )
}
