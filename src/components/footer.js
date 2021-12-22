import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  const today = new Date()
  const date =
    today.getFullYear() + " " + today.getMonth() + " " + today.getDate()

  return (
    <footer className="flex items-center justify-between py-5 mt-6">
      <h1 className="text-green-sol">{date}</h1>
      <Link to="https://github.com/coffee-monk">
        <FontAwesomeIcon
          className="text-3xl text-magenta-sol hover:text-blue-sol transition ease-out duration-200"
          icon={faGithub}
        />
      </Link>
    </footer>
  )
}

export default Footer
