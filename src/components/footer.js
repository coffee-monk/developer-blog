import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  const today = new Date()
  const date =
    today.getFullYear() + " " + today.getMonth() + " " + today.getDate()

  return (
    <footer className="absolute bottom-0 w-full mx-auto max-w-2xl">
      <div className="flex items-center justify-between py-5 mt-6">
        <div className="relative inline-block">
          <button>Dropdown</button>
          <ul>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
        </div>

        <a href="https://github.com/coffee-monk">
          <FontAwesomeIcon
            className="text-3xl text-magenta-sol hover:text-blue-sol transition ease-out duration-200"
            icon={faGithub}
          />
        </a>
      </div>
    </footer>
  )
}

export default Footer
