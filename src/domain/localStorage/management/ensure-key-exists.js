/* Ensure Local Storage Key Exists */
function ensureKeyExists(key, defaultValue) {
    const existingEntry = localStorage.getItem(key)

    if (!existingEntry) {
        localStorage.setItem(key, JSON.stringify(defaultValue))
    }
}

export default ensureKeyExists
