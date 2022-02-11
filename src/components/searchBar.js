import React, { useContext } from "react"
import { useLocation } from "@reach/router"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

import { BlogContext } from "../context/BlogContextProvider"

const SearchBar = () => {
  const { state, dispatch } = useContext(BlogContext)
  const { posts } = state

  const updateSearchPosts = event => {
    const filteredPosts = posts.filter(post => {
      return post.frontmatter.title
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    })
    dispatch({
      type: "SET_FILTERED_POSTS",
      payload: filteredPosts,
    })
  }

  const location = useLocation()

  return (
    <div className="ml-auto w-44">
      <span className="absolute z-10 items-center justify-center w-8 py-2.5 pl-3 text-base leading-snug text-center bg-transparent text-green-sol">
        <FontAwesomeIcon icon={faSearch} />
      </span>

      <input
        type="text"
        name="search"
        placeholder="Search"
        onChange={updateSearchPosts}
        className={`px-3 py-2 pl-10 w-full text-cyan-sol text-sm bg-transparent ${
          location.pathname === "/"
            ? "placeholder-magenta-sol border-magenta-sol pointer-events-auto"
            : "placeholder-green-sol border-green-sol pointer-events-none"
        } rounded-lg border-2 border-base-02 border-magenta-sol hover:border-blue-sol focus:border-cyan-sol focus:outline-none focus:placeholder-transparent transition ease-out duration-200`}
      />
    </div>
  )
}

export default SearchBar
