import React, { createContext, useReducer } from "react"

export const BlogContext = createContext()

const initialState = {
  currentPage: 1,
  totalPages: 1,
  theme: "dark",
}

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT": {
      return {
        ...state,
        currentPage:
          state.currentPage < state.totalPages
            ? state.currentPage + 1
            : state.currentPage,
      }
    }
    case "DECREMENT": {
      return {
        ...state,
        currentPage:
          state.currentPage > 1 ? state.currentPage - 1 : state.currentPage,
      }
    }
    case "TOTAL_PAGES": {
      return {
        ...state,
        totalPages: action.payload,
      }
    }
    case "TOGGLE_THEME": {
      return {
        ...state,
        theme: state.theme === "dark" ? "light" : "dark",
      }
    }
  }
}

const BlogContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <BlogContext.Provider value={{ state, dispatch }}>
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContextProvider
