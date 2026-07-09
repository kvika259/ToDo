import { localStorageHelpers } from "../helpers/LocalStorageHelpers"
import { errors } from "../helpers/errors"

export const login = async (user, navigate) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_URL}auth/login`, {
            method: 'POST',
            headers:
            {
                accept: 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(user)
        })

        if (response.status !== 200) { throw new Error(`Ошибка : ${response.status}`); }
        const userInfo = await response.json()

        localStorageHelpers.setToken(userInfo.access_token)
        navigate("/MyTask")

    } catch (error) { errors(error) }
}

export const registr = async (user, navigate) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_URL}auth/register`, {
            method: 'POST',
            headers:
            {
                accept: 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(user)
        })

        if (response.status !== 200) { throw new Error(response.status); }
        const userInfo = await response.json()
        localStorageHelpers.setToken(userInfo.access_token)
        navigate("/MyTask")
    } catch (error) {
        errors(error.message)
    }
}