import { createSlice } from '@reduxjs/toolkit' 
const userRoleFromLocalStorage = () => { 
    const role = localStorage.getItem('userRole') 
    return role ? role : 'user' 
} 
const initialState = { role: userRoleFromLocalStorage(), } 
export const userSlice = createSlice({ name: 'user', initialState, reducers: { 
    setUserRole: (state, action) => { state.role = action.payload }, 
}, }) 
export const { setUserRole } = userSlice.actions 
export default userSlice.reducer 