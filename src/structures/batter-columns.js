/* Data Types */
export const columnDataTypes = {
    str: "string",
    num: "numeric",
    bool: "boolean"
}

/* View Data Transformations */
function positionsToText(positions) {
    return Array.isArray(positions) ? positions.join(", ") : "UTIL"
}

function isConfirmedFreeAgent(currentFantasyTeam) {
    return currentFantasyTeam === "FA"
}

/* Column Configuration */
const batterColumns = [
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
        dataKey: "currentFantasyTeam",
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
        header: "Plate Appearances",
        dispalyOrder: 1000,
        dataType: columnDataTypes.num,
        dataKey: "pa",
        hideable: true
    },
    {
        header: "xwOBA",
        dispalyOrder: 1100,
        dataType: columnDataTypes.num,
        dataKey: "xwoba",
        hideable: true
    },
    {
        header: "xBA",
        dispalyOrder: 1200,
        dataType: columnDataTypes.num,
        dataKey: "xba",
        hideable: true
    },
    {
        header: "xISO",
        dispalyOrder: 1300,
        dataType: columnDataTypes.num,
        dataKey: "xiso",
        hideable: true
    },
    {
        header: "Average Exit Velocity",
        dispalyOrder: 1400,
        dataType: columnDataTypes.num,
        dataKey: "avgExitVel",
        hideable: true
    },
    {
        header: "Barrel Rate",
        dispalyOrder: 1500,
        dataType: columnDataTypes.num,
        dataKey: "barrelRate",
        hideable: true
    },
    {
        header: "Chase Rate",
        dispalyOrder: 1600,
        dataType: columnDataTypes.num,
        dataKey: "chaseRate",
        hideable: true
    },
    {
        header: "Whiff Rate",
        dispalyOrder: 1700,
        dataType: columnDataTypes.num,
        dataKey: "whiffRate",
        hideable: true
    },
    {
        header: "Speed",
        dispalyOrder: 1800,
        dataType: columnDataTypes.num,
        dataKey: "speed",
        hideable: true
    },
]

export default batterColumns
