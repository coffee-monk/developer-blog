import React, { createContext, useReducer } from "react"

export const BlogContext = createContext()

const initialState = {
  posts: [],
  filteredPosts: [],
  currentPage: 1,
  totalPages: 1,
  postsPerPage: 3,
  searchBarValue: "",
}

function reducer(state, action) {
  switch (action.type) {
    case "SET_POSTS": {
      return {
        ...state,
        posts: action.payload,
      }
    }
    case "SET_FILTERED_POSTS": {
      return {
        ...state,
        filteredPosts: action.payload,
      }
    }
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
    case "PAGINATOR_MAX": {
      return {
        ...state,
        totalPages: action.payload,
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
