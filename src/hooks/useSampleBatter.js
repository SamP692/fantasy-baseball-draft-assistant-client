/* Core Libraries */
import { useState, useEffect } from "preact/hooks"

/* Data */
import getSampleBatter from "data/batters/get-sample"

/* Use Sample Batter Hook */
function useSampleBatter(incomplete = false) {
    const [batter, setBatter] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchSampleBatter() {
            try {
                const batter = await getSampleBatter(incomplete)

                setBatter(batter)
            } catch (error) {
                setError(error)
            }

            setLoading(false)
        }

        fetchSampleBatter()
    }, [])

    return { batter, loading, error }
}

export default useSampleBatter
