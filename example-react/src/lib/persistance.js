export const writeToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const readFromLocalStorage = (key) => {
    const authFake = localStorage.getItem(key)

    if (!authFake) {
        return null
    }

    return JSON.parse(authFake)
}
