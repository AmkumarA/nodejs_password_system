const jsonFormatter = (resultData) => {
    if (Array.isArray(resultData)) {
        return resultData.map((item) => item.toJSON())
    }
    return resultData ? resultData.toJSON() : null
}
export { jsonFormatter }