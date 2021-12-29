const React = require("react")
const BlogContextProvider = require("./src/context/BlogContextProvider").default

exports.wrapRootElement = ({ element }) => {
  return <BlogContextProvider>{element}</BlogContextProvider>
}
