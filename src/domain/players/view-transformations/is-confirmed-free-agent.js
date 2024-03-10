/* Is Confirmed Free Agent */
function isConfirmedFreeAgent([currentFantasyTeam, keeperRound]) {
    const isKnownFreeAgent = currentFantasyTeam === "FA"

    const cantBeKept = typeof currentFantasyTeam === "string" && currentFantasyTeam.length > 2 && !keeperRound
    
    return isKnownFreeAgent || cantBeKept
}

export default isConfirmedFreeAgent
