import { Link } from "gatsby"
import React from "react"

function Header() {
  return (
    <nav className="flex flex-wrap items-center justify-between py-5 mb-6">
      <h1 className="text-magenta-sol hover:text-blue-sol transition ease-out duration-200">
        <Link to="/">DEVBLOG</Link>
      </h1>
      <p>hi</p>
    </nav>
  )
}

export default Header
