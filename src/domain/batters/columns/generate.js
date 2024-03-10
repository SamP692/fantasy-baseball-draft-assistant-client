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
            header: "Ign",
            displayOrder: 10,
            dataType: dataValueTypes.bool,
            dataKey: "ignore",
        },
        {
            header: "Tgt",
            displayOrder: 50,
            dataType: dataValueTypes.bool,
            dataKey: "target",
        },
        {
            header: "Inj",
            displayOrder: 70,
            dataType: dataValueTypes.bool,
            dataKey: "injuryConcern"
        },
        {
            header: "Name",
            displayOrder: 90,
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
            header: "Positions",
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
            header: "FA",
            displayOrder: 500,
            dataType: dataValueTypes.bool,
            dataKey: ["currentFantasyTeam", "keeperRound"],
            viewDataTransformation: isConfirmedFreeAgent,
            hideable: true
        },
        {
            header: "Rnd",
            displayOrder: 600,
            dataType: dataValueTypes.num,
            dataKey: "keeperRound",
            hideable: true
        },
        // {
        //     header: "Confirmed Keeper",
        //     displayOrder: 700,
        //     dataType: dataValueTypes.bool,
        //     dataKey: "confirmedKeeper",
        //     hideable: true,
        // },
        // {
        //     header: "Expected Free Agent",
        //     displayOrder: 800,
        //     dataType: dataValueTypes.bool,
        //     dataKey: "expectedFa",
        //     hideable: true
        // },
        {
            header: "Keep",
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
            hideable: true,
            colorScale: "prefer high"
        },
        {
            header: "xBA",
            dispalyOrder: 1200,
            dataType: dataValueTypes.num,
            dataKey: rawValues ? "xba" : "xbaDev",
            hideable: true,
            colorScale: "prefer high"
        },
        {
            header: "xISO",
            dispalyOrder: 1300,
            dataType: dataValueTypes.num,
            dataKey: rawValues ? "xiso" : "xisoDev",
            hideable: true,
            colorScale: "prefer high"
        },
        {
            header: "AEV",
            dispalyOrder: 1400,
            dataType: dataValueTypes.num,
            dataKey: rawValues ? "avgExitVel" : "avgExitVelDev",
            hideable: true,
            colorScale: "prefer high"
        },
        {
            header: "Barrel%",
            dispalyOrder: 1500,
            dataType: dataValueTypes.num,
            dataKey: rawValues ? "barrelRate" : "barrelRateDev",
            hideable: true,
            colorScale: "prefer high"
        },
        {
            header: "Chase%",
            dispalyOrder: 1600,
            dataType: dataValueTypes.num,
            dataKey: rawValues ? "chaseRate" : "chaseRateDev",
            hideable: true,
            colorScale: "prefer low"
        },
        {
            header: "Whiff%",
            dispalyOrder: 1700,
            dataType: dataValueTypes.num,
            dataKey: rawValues ? "whiffRate" : "whiffRateDev",
            hideable: true,
            colorScale: "prefer low"
        },
        {
            header: "Speed",
            dispalyOrder: 1800,
            dataType: dataValueTypes.num,
            dataKey: rawValues ? "speed" : "speedDev",
            hideable: true,
            colorScale: "prefer high"
        },
    ]
}

export default generateBatterColumns
