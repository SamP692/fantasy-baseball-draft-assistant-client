/* Fantasy Team Name Alias */
function fantasyTeamNameAlias(team) {
    if (!team) return null

    if (team.includes("Fergie")) return "FergieNFT"

    if (team.includes("Suck on")) return "Suck on these"

    if (team.includes("Peanut Butter")) return "Elly Time"

    if (team.includes("Like Yandy")) return "Yandy's"

    if (team.includes("Wtf wander")) return "Wtf Wander"

    if (team.includes("Naylor")) return "Naylor Show"

    return team
}

export default fantasyTeamNameAlias
