import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: [], 
    currentUser: null,
    user: {}
}
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        
        addUser: (state, action) => {
            state.users = action.payload
        },
        findUser: (state, action) => {
            const userIdToFind = action.payload
            state.currentUser = state.users.find((user) => user.id === userIdToFind || null)
        },
        setUser: (state, action) => {
            const userId = action.payload
            state.user = state.users.find((user) => user.id === userId)
        }
    }
})

export const { addUser, findUser, setUser } = userSlice.actions
export default userSlice.reducer