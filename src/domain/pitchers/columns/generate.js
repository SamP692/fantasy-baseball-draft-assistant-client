/* Domain */
import createPositionsToTextTransformation from "domain/players/view-transformations/positions-to-text"
import isConfirmedFreeAgent from "domain/players/view-transformations/is-confirmed-free-agent"
import fantasyTeamNameAlias from "domain/players/view-transformations/fantasy-team-name-alias"
import dataValueTypes from "domain/players/data/types"

/* View Data Transformations */
const positionsToText = createPositionsToTextTransformation("P")

/* Column Configuration */
function generatePitcherColumns(rawValues = false) { 
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
            displayOrder: 1000,
            dataType: dataValueTypes.num,
            dataKey: "pa",
            hideable: true
        },
        {
            header: "GS",
            displayOrder: 1050,
            dataType: dataValueTypes.num,
            dataKey: "gs",
            hideable: true
        },
        {
            header: "xwOBA",
            displayOrder: 1100,
            dataType: dataValueTypes.num,
            dataKey: rawValues ? "xwoba" : "xwobaDev",
            hideable: true,
            colorScale: "prefer low"
        },
        {
            header: "xBA",
            displayOrder: 1200,
            dataType: dataValueTypes.num,
            dataKey: rawValues ? "xba" : "xbaDev",
            hideable: true,
            colorScale: "prefer low"
        },
        {
            header: "xISO",
            displayOrder: 1300,
            dataType: dataValueTypes.num,
            dataKey: rawValues ? "xiso" : "xisoDev",
            hideable: true,
            colorScale: "prefer low"
        },
        {
            header: "Average Exit Velocity",
            displayOrder: 1400,
            dataType: dataValueTypes.num,
            dataKey: rawValues ? "avgExitVel" : "avgExitVelDev",
            hideable: true,
            colorScale: "prefer low"
        },
        {
            header: "Barrel Rate",
            displayOrder: 1500,
            dataType: dataValueTypes.num,
            dataKey: rawValues ? "barrelRate" : "barrelRateDev",
            hideable: true,
            colorScale: "prefer low"
        },
        {
            header: "Zone Rate",
            displayOrder: 1600,
            dataType: dataValueTypes.num,
            dataKey: rawValues ? "zoneRate" : "zoneRateDev",
            hideable: true,
            colorScale: "prefer high"
        },
        {
            header: "Chase Rate",
            displayOrder: 1700,
            dataType: dataValueTypes.num,
            dataKey: rawValues ? "chaseRate" : "chaseRateDev",
            hideable: true,
            colorScale: "prefer high"
        },
        {
            header: "Whiff Rate",
            displayOrder: 1800,
            dataType: dataValueTypes.num,
            dataKey: rawValues ? "whiffRate" : "whiffRateDev",
            hideable: true,
            colorScale: "prefer high"
        },
        {
            header: "FB Rate",
            displayOrder: 1900,
            dataType: dataValueTypes.num,
            dataKey: rawValues ? "fbRate" : "fbRateDev",
            hideable: true,
            colorScale: "prefer high"
        },
        {
            header: "FB Spin",
            displayOrder: 2000,
            dataType: dataValueTypes.num,
            dataKey: rawValues ? "fbSpin" : "fbSpinDev",
            hideable: true,
            colorScale: "prefer high"
        },
        {
            header: "Breaking Ball Rate",
            displayOrder: 2100,
            dataType: dataValueTypes.num,
            dataKey: rawValues ? "brkRate" : "brkRateDev",
            hideable: true,
            colorScale: "prefer high"
        },
        {
            header: "Breaking Ball Spin",
            displayOrder: 2200,
            dataType: dataValueTypes.num,
            dataKey: rawValues ? "brkSpin" : "brkSpinDev",
            hideable: true,
            colorScale: "prefer high"
        },
        {
            header: "Off-Speed Rate",
            displayOrder: 2300,
            dataType: dataValueTypes.num,
            dataKey: rawValues ? "osRate" : "osRateDev",
            hideable: true,
            colorScale: "prefer high"
        },
        {
            header: "Off-Speed Spin",
            displayOrder: 2400,
            dataType: dataValueTypes.num,
            dataKey: rawValues ? "osSpin" : "osSpinDev",
            hideable: true,
            colorScale: "prefer high"
        }
    ]
}

export default generatePitcherColumns
