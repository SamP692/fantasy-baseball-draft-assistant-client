/* Limit Number Size */
function limitNumberSize(num) {
    const isNum = typeof num === "number"

    if (isNum) {
        const isInteger = Number.isInteger(num)

        if (isInteger) return num

        const limitedNumber = num.toFixed(2)

        return limitedNumber
    }

    return num
}

export default limitNumberSize
