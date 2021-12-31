import React from "react"

const SearchBar = () => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={wordEntered}
      onChange={handleFilter}
    />
  )
}

export default SearchBar
