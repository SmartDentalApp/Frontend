import Cookies from "js-cookie"

const TOKEN_NAME = "authToken"

export const setAuthToken = (tokenValue: string, rememberToken: boolean) => {
    if (rememberToken) {
        Cookies.set(TOKEN_NAME, tokenValue, { expires: 7 })
        localStorage.clear()
    } else {
        localStorage.setItem(TOKEN_NAME, tokenValue)
        Cookies.remove(TOKEN_NAME)
    }
}

export const getAuthToken = () => {
    return Cookies.get(TOKEN_NAME) || localStorage.getItem(TOKEN_NAME)
}

export const removeAuthToken = () => {
    Cookies.remove(TOKEN_NAME)
    localStorage.clear()
}