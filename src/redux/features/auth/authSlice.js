import { createSlice } from "@reduxjs/toolkit"

// Load from localStorage safely
const loadUserFromStorage = () => {
  try {
    const stored = localStorage.getItem("token")
    if (!stored) return { user: null, accessToken: null }

    const parsed = JSON.parse(stored)
    return {
      user: parsed?.user || null,
      accessToken: parsed?.accessToken || null,
    }
  } catch (error) {
    console.error("Invalid token in localStorage", error)
    return { user: null, accessToken: null }
  }
}

const initialState = {
  ...loadUserFromStorage(),
  isAuthenticated: !!loadUserFromStorage().accessToken,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user
      state.accessToken = action.payload.accessToken
      state.isAuthenticated = true

      localStorage.setItem(
        "token",
        JSON.stringify(action.payload)
      )
    },

    logout: (state) => {
      state.user = null
      state.accessToken = null
      state.isAuthenticated = false

      localStorage.removeItem("token")
    },
  },
})

export const { loginSuccess, logout } = authSlice.actions
export default authSlice.reducer