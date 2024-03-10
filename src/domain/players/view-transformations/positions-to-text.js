/* Positions Array to Text */
function createPositionsToTextTransformation(defaultPosition) {
    function positionsToText(positions) {
        return Array.isArray(positions) ? positions.join(", ") : defaultPosition
    }

    return positionsToText
}


export default createPositionsToTextTransformation
