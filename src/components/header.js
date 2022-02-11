import { Link } from "gatsby"

import React from "react"
import Paginator from "./paginator"
import SearchBar from "./searchBar"

const Header = () => {
  return (
    <nav className="grid grid-cols-3 items-center py-5 mb-6">
      <h1>
        <Link
          className="text-magenta-sol hover:text-blue-sol transition ease-out duration-200"
          to="/"
        >
          DEVBLOG
        </Link>
      </h1>
      <Paginator />
      <SearchBar />
    </nav>
  )
}

export default Header
