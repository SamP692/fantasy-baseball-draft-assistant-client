/* Domain */
import createPositionsToTextTransformation from "domain/players/view-transformations/positions-to-text"
import isConfirmedFreeAgent from "domain/players/view-transformations/is-confirmed-free-agent"
import fantasyTeamNameAlias from "domain/players/view-transformations/fantasy-team-name-alias"
import dataValueTypes from "domain/players/data/types"

/* View Data Transformations */
const positionsToText = createPositionsToTextTransformation("UTIL")

/* Column Configuration */
function generateBatterColumns(rawValues = false) { 
    return [
        {
            header: "Name",
            displayOrder: 0,
            dataType: dataValueTypes.str,
            dataKey: "name"
        },
        {
            header: "Team",
            displayOrder: 100,
            dataType: dataValueTypes.str,
            dataKey: "team",
            hideable: true
        },
        {
            header: "Fantasy Team",
            displayOrder: 200,
            dataType: dataValueTypes.str,
            dataKey: "currentFantasyTeam",
            viewDataTransformation: fantasyTeamNameAlias,
            hideable: true
        },
        {
            header: "Eligible Positions",
            displayOrder: 300,
            dataType: dataValueTypes.str,
            dataKey: "yahooPositions",
            viewDataTransformation: positionsToText,
            hideable: true
        },
        {
            header: "Age",
            displayOrder: 400,
            dataType: dataValueTypes.num,
            dataKey: "age",
            hideable: true
        },
        {
            header: "Confirmed Free Agent",
            displayOrder: 500,
            dataType: dataValueTypes.bool,
            dataKey: ["currentFantasyTeam", "keeperRound"],
            viewDataTransformation: isConfirmedFreeAgent,
            hideable: true
        },
        {
            header: "Minimum Keeper Round",
            displayOrder: 600,
            dataType: dataValueTypes.num,
            dataKey: "keeperRound",
            hideable: true
        },
        {
            header: "Confirmed Keeper",
            displayOrder: 700,
            dataType: dataValueTypes.bool,
            dataKey: "confirmedKeeper",
            hideable: true,
        },
        {
            header: "Expected Free Agent",
            displayOrder: 800,
            dataType: dataValueTypes.bool,
            dataKey: "expectedFa",
            hideable: true
        },
        {
            header: "Expected Keeper",
            displayOrder: 900,
            dataType: dataValueTypes.bool,
            dataKey: "expectedKeeper",
            hideable: true
        },
        {
            header: "PAs",
            dispalyOrder: 1000,
            dataType: dataValueTypes.num,
            dataKey: "pa",
            hideable: true
        },
        {
            header: "xwOBA",
            dispalyOrder: 1100,
            dataType: dataValueTypes.num,
            dataKey: rawValues ? "xwoba" : "xwobaDev",
            hideable: true
        },
        {
            header: "xBA",
            dispalyOrder: 1200,
            dataType: dataValueTypes.num,
            dataKey: rawValues ? "xba" : "xbaDev",
            hideable: true
        },
        {
            header: "xISO",
            dispalyOrder: 1300,
            dataType: dataValueTypes.num,
            dataKey: rawValues ? "xiso" : "xisoDev",
            hideable: true
        },
        {
            header: "Average Exit Velocity",
            dispalyOrder: 1400,
            dataType: dataValueTypes.num,
            dataKey: rawValues ? "avgExitVel" : "avgExitVelDev",
            hideable: true
        },
        {
            header: "Barrel Rate",
            dispalyOrder: 1500,
            dataType: dataValueTypes.num,
            dataKey: rawValues ? "barrelRate" : "barrelRateDev",
            hideable: true
        },
        {
            header: "Chase Rate",
            dispalyOrder: 1600,
            dataType: dataValueTypes.num,
            dataKey: rawValues ? "chaseRate" : "chaseRateDev",
            hideable: true
        },
        {
            header: "Whiff Rate",
            dispalyOrder: 1700,
            dataType: dataValueTypes.num,
            dataKey: rawValues ? "whiffRate" : "whiffRateDev",
            hideable: true
        },
        {
            header: "Speed",
            dispalyOrder: 1800,
            dataType: dataValueTypes.num,
            dataKey: rawValues ? "speed" : "speedDev",
            hideable: true
        },
    ]
}

export default generateBatterColumns
