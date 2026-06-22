export const localStorageHelpers = {
    getToken: () => localStorage.getItem('token'),
    setToken: (json) => localStorage.setItem('token', json),
    removeToken: () => localStorage.removeItem('token')
}