import { localStorageHelpers } from "../helpers/LocalStorageHelpers"

export const fetchTodo = async (setIsLoading, setTasks) => {
    try {
        setIsLoading(true)
        const response = await fetch(`${import.meta.env.VITE_URL}todos`, {
            method: 'GET',
            headers: {
                accept: '*/*',
                Authorization: `Bearer ${localStorageHelpers.getToken()}`
            }

        })
        const data = await response.json()
        setTasks(data.data)
    } catch (error) { }
    finally {
        setIsLoading(false);
    }
}


export const create = async (setTasks, setNewTask, newTask) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_URL}todos`, {
            method: 'POST',
            headers:
            {
                accept: 'application/json',
                "Content-Type": 'application/json',
                Authorization: `Bearer ${localStorageHelpers.getToken()}`
            },
            body: JSON.stringify(newTask)
        })
        const data = await response.json()
        setTasks(tasks => [...tasks, data])
    } catch (error) { }
    setNewTask({ title: "", description: '' }) // обнуление строки ввода новой задачи после добавления
}

export const filterTodo = async (filter, setTasks) => {
    try {
        const response = await fetch(filter !== '' ? `${import.meta.env.VITE_URL}todos?completed=${filter}` : `${import.meta.env.VITE_URL}todos`, { //меняется ссылка
            method: 'GET',
            headers: {
                accept: '*/*',
                Authorization: `Bearer ${localStorageHelpers.getToken()}`
            }

        })
        const data = await response.json()
        setTasks(data.data)
    } catch (error) { }
}


export const isCompleted = async (id, setTasks) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_URL}todos/${id}/toggle`, {
            method: 'PATCH',
            headers:
            {
                accept: 'application/json',
                Authorization: `Bearer ${localStorageHelpers.getToken()}`
            }
        })
        setTasks(tasks => tasks.map(i => i.id == id ? { ...i, completed: !i.completed } : i))
    } catch (error) { }
}


export const deleteT = async (setTasks, id) => {

    try {
        const response = await fetch(`${import.meta.env.VITE_URL}todos/${id}`, {
            method: 'DELETE',
            headers:
            {
                accept: 'application/json',
                Authorization: `Bearer ${localStorageHelpers.getToken()}`
            }
        })
        setTasks(tasks => tasks.filter(i => i.id != id))
    } catch (error) { console.log(error) }
}