import { localStorageHelpers } from "../helpers/LocalStorageHelpers"
import { createAsyncThunk } from '@reduxjs/toolkit'

export const getTasks = createAsyncThunk(
    'tasks/getTasks',
    async (_, thunkAPI) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_URL}todos`, {
                method: 'GET',
                headers: {
                    accept: '*/*',
                    Authorization: `Bearer ${localStorageHelpers.getToken()}`
                }
            })
            const { data } = await response.json()
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const createTask = createAsyncThunk(
    'tasks/createTask',
    async (newTask, thunkAPI) => {
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
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }

)

export const filterTasks = createAsyncThunk(
    'tasks/filterTasks',
    async (filter, thunkAPI) => {
        try {
            const response = await fetch(filter !== '' ? `${import.meta.env.VITE_URL}todos?completed=${filter}` : `${import.meta.env.VITE_URL}todos`, //меняется ссылка
                {
                    method: 'GET',
                    headers: {
                        accept: '*/*',
                        Authorization: `Bearer ${localStorageHelpers.getToken()}`
                    }
                })
            const { data } = await response.json()
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const completedTask = createAsyncThunk(
    'tasks/completedTask',
    async (id, thunkAPI) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_URL}todos/${id}/toggle`, {
                method: 'PATCH',
                headers:
                {
                    accept: 'application/json',
                    Authorization: `Bearer ${localStorageHelpers.getToken()}`
                }
            })
            return id
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const deleteTask = createAsyncThunk(
    'tasks/deleteTask',
    async (id, thunkAPI) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_URL}todos/${id}`, {
                method: 'DELETE',
                headers:
                {
                    accept: 'application/json',
                    Authorization: `Bearer ${localStorageHelpers.getToken()}`
                }
            })
            return id
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }

)


export const updatingTask = createAsyncThunk(
    'tasks/updateTask',
    async (updateTask, thunkAPI) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_URL}todos/${updateTask.id}`, {
                method: 'PATCH',
                headers:
                {
                    accept: '*/*',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorageHelpers.getToken()}`
                },
                body: JSON.stringify(updateTask.task)
            })
            return updateTask
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }

)