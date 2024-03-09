/* Data Types */
export const columnDataTypes = {
    str: "string",
    num: "numeric",
    bool: "boolean"
}

/* View Data Transformations */
function positionsToText(positions) {
    return Array.isArray(positions) ? positions.join(", ") : "P"
}

function isConfirmedFreeAgent([currentFantasyTeam, keeperRound]) {
    const isKnownFreeAgent = currentFantasyTeam === "FA"

    const cantBeKept = typeof currentFantasyTeam === "string" && currentFantasyTeam.length > 2 && !keeperRound
    
    return isKnownFreeAgent || cantBeKept
}

function fantasyTeamNameAlias(team) {
    if (!team) return null

    if (team.includes("Fergie")) return "FergieNFT"

    if (team.includes("Suck on")) return "Suck on these Tatis"

    if (team.includes("Peanut Butter")) return "Elly Time"

    if (team.includes("Like Yandy")) return "Yandy's"

    if (team.includes("Wtf wander")) return "Wtf Wander"

    return team
}

/* Column Configuration */
function pitcherColumns(rawValues = false) { 
    return [
        {
            header: "Name",
            displayOrder: 0,
            dataType: columnDataTypes.str,
            dataKey: "name"
        },
        {
            header: "Team",
            displayOrder: 100,
            dataType: columnDataTypes.str,
            dataKey: "team",
            hideable: true
        },
        {
            header: "Fantasy Team",
            displayOrder: 200,
            dataType: columnDataTypes.str,
            dataKey: "currentFantasyTeam",
            viewDataTransformation: fantasyTeamNameAlias,
            hideable: true
        },
        {
            header: "Eligible Positions",
            displayOrder: 300,
            dataType: columnDataTypes.str,
            dataKey: "yahooPositions",
            viewDataTransformation: positionsToText,
            hideable: true
        },
        {
            header: "Age",
            displayOrder: 400,
            dataType: columnDataTypes.num,
            dataKey: "age",
            hideable: true
        },
        {
            header: "Confirmed Free Agent",
            displayOrder: 500,
            dataType: columnDataTypes.bool,
            dataKey: ["currentFantasyTeam", "keeperRound"],
            viewDataTransformation: isConfirmedFreeAgent,
            hideable: true
        },
        {
            header: "Minimum Keeper Round",
            displayOrder: 600,
            dataType: columnDataTypes.num,
            dataKey: "keeperRound",
            hideable: true
        },
        {
            header: "Confirmed Keeper",
            displayOrder: 700,
            dataType: columnDataTypes.bool,
            dataKey: "confirmedKeeper",
            hideable: true,
        },
        {
            header: "Expected Free Agent",
            displayOrder: 800,
            dataType: columnDataTypes.bool,
            dataKey: "expectedFa",
            hideable: true
        },
        {
            header: "Expected Keeper",
            displayOrder: 900,
            dataType: columnDataTypes.bool,
            dataKey: "expectedKeeper",
            hideable: true
        },
        {
            header: "PAs",
            displayOrder: 1000,
            dataType: columnDataTypes.num,
            dataKey: "pa",
            hideable: true
        },
        {
            header: "GS",
            displayOrder: 1050,
            dataType: columnDataTypes.num,
            dataKey: "gs",
            hideable: true
        },
        {
            header: "xwOBA",
            displayOrder: 1100,
            dataType: columnDataTypes.num,
            dataKey: rawValues ? "xwoba" : "xwobaDev",
            hideable: true
        },
        {
            header: "xBA",
            displayOrder: 1200,
            dataType: columnDataTypes.num,
            dataKey: rawValues ? "xba" : "xbaDev",
            hideable: true
        },
        {
            header: "xISO",
            displayOrder: 1300,
            dataType: columnDataTypes.num,
            dataKey: rawValues ? "xiso" : "xisoDev",
            hideable: true
        },
        {
            header: "Average Exit Velocity",
            displayOrder: 1400,
            dataType: columnDataTypes.num,
            dataKey: rawValues ? "avgExitVel" : "avgExitVelDev",
            hideable: true
        },
        {
            header: "Barrel Rate",
            displayOrder: 1500,
            dataType: columnDataTypes.num,
            dataKey: rawValues ? "barrelRate" : "barrelRateDev",
            hideable: true
        },
        {
            header: "Zone Rate",
            displayOrder: 1600,
            dataType: columnDataTypes.num,
            dataKey: rawValues ? "zoneRate" : "zoneRateDev",
            hideable: true
        },
        {
            header: "Chase Rate",
            displayOrder: 1700,
            dataType: columnDataTypes.num,
            dataKey: rawValues ? "chaseRate" : "chaseRateDev",
            hideable: true
        },
        {
            header: "Whiff Rate",
            displayOrder: 1800,
            dataType: columnDataTypes.num,
            dataKey: rawValues ? "whiffRate" : "whiffRateDev",
            hideable: true
        },
        {
            header: "FB Rate",
            displayOrder: 1900,
            dataType: columnDataTypes.num,
            dataKey: rawValues ? "fbRate" : "fbRateDev",
            hideable: true
        },
        {
            header: "FB Spin",
            displayOrder: 2000,
            dataType: columnDataTypes.num,
            dataKey: rawValues ? "fbSpin" : "fbSpinDev",
            hideable: true
        },
        {
            header: "Breaking Ball Rate",
            displayOrder: 2100,
            dataType: columnDataTypes.num,
            dataKey: rawValues ? "brkRate" : "brkRateDev",
            hideable: true
        },
        {
            header: "Breaking Ball Spin",
            displayOrder: 2200,
            dataType: columnDataTypes.num,
            dataKey: rawValues ? "brkSpin" : "brkSpinDev",
            hideable: true
        },
        {
            header: "Off-Speed Rate",
            displayOrder: 2300,
            dataType: columnDataTypes.num,
            dataKey: rawValues ? "osRate" : "osRateDev",
            hideable: true
        },
        {
            header: "Off-Speed Spin",
            displayOrder: 2400,
            dataType: columnDataTypes.num,
            dataKey: rawValues ? "osSpin" : "osSpinDev",
            hideable: true
        }
    ]
}

export default pitcherColumns
