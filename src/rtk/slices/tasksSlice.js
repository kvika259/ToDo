import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getTasks, createTask, filterTasks, completedTask, deleteTask } from '../../api/todo'


const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        loading: false
    },
    reducers: {},
    extraReducers: builder => {

        builder.addCase(getTasks.fulfilled, (state, action) => {
            state.tasks = action.payload
            state.loading = false
        })
        builder.addCase(createTask.fulfilled, (state, action) => {
            state.tasks.push(action.payload)
            state.loading = false
        })
        builder.addCase(filterTasks.fulfilled, (state, action) => {
            state.tasks = action.payload
            state.loading = false
        })
        builder.addCase(completedTask.fulfilled, (state, action) => {
            state.tasks = state.tasks.map(i => i.id == action.payload ? { ...i, completed: !i.completed } : i)
            state.loading = false
        })
        builder.addCase(deleteTask.fulfilled, (state, action) => {
            state.tasks = state.tasks.filter(item => item.id != action.payload)
            state.loading = false
        })

        builder.addMatcher((action) => action.type.endsWith('/pending'), // Условие: если запрос только начался
            (state) => { state.loading = true })
    }
})
export default tasksSlice.reducer

