import React from "react"
import { useLocation } from "@reach/router"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import LanguageFilter from "./languageFilter"

const Footer = () => {
  const location = useLocation()
  console.log(location.pathname)

  return (
    <footer className="fixed bg-base-03 bottom-0 w-full mx-auto max-w-2xl">
      <div className="flex items-center justify-between py-5 mt-6">
        <LanguageFilter />
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
