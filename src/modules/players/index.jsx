/* Core Libraries */
import { h } from "preact"
import { useEffect } from "preact/hooks"

/* Data */
import getSampleBatter from "data/batters/get-sample"

/* Players */
function Players() {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getSampleBatter()
                console.log(data)
            } catch (e) {
                console.error(e)
            }
        }

        fetchData()
    }, [])

    return (
        <section>
            Players
        </section>
    )
}

export default Players
