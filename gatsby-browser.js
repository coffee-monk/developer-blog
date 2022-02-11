import React from "react"
import BlogContextProvider from "./src/context/BlogContextProvider"

// import "prismjs/themes/prism-okaidia.css"
// import "prismjs/themes/prism-solarizedlight.css"
import "prism-solarized-dark/prism-solarizeddark.css"

export const wrapRootElement = ({ element }) => {
  return <BlogContextProvider>{element}</BlogContextProvider>
}
