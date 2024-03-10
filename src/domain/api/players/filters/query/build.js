/* Build Filters String */
function buildFiltersString({ position, knownKeepers, expectedKeepers }) {
    const filterStrings = []

    if (position) {
        filterStrings.push(`position=${position}`)
    }

    if (knownKeepers) {
        filterStrings.push("knownKeepers=true")
    }

    if (expectedKeepers) {
        filterStrings.push("&expectedKeepers=true")
    }

    if (filterStrings.length === 0) return null

    return filterStrings.join("&")
}

export default buildFiltersString
