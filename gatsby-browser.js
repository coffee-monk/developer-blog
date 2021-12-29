import React from "react"
import BlogContextProvider from "./src/context/BlogContextProvider"

export const wrapRootElement = ({ element }) => {
  return <BlogContextProvider>{element}</BlogContextProvider>
}
