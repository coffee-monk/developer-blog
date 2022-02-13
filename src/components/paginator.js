import React, { useContext } from "react"
import { useLocation } from "@reach/router"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"

import { BlogContext } from "../context/BlogContextProvider"

function Paginator() {
  const { state, dispatch } = useContext(BlogContext)
  const { totalPages, currentPage } = state

  const location = useLocation()

  return (
    <div className="flex flex-wrap items-center justify-center">
      <FontAwesomeIcon
        onClick={() => dispatch({ type: "DECREMENT" })}
        icon={faAngleLeft}
        className={`${
          location.pathname === "/"
            ? currentPage === 1
              ? "text-green-sol pointer-events-none"
              : "text-magenta-sol pointer-events-auto"
            : "text-green-sol pointer-events-none"
        } text-xl mx-5 cursor-pointer hover:text-cyan-sol transition ease-out duration-100`}
      />
      <h1 className="text-green-sol pointer-events-none">
        {state.currentPage}
      </h1>
      <FontAwesomeIcon
        onClick={() => dispatch({ type: "INCREMENT" })}
        icon={faAngleRight}
        className={`${
          location.pathname === "/"
            ? currentPage === totalPages
              ? "text-green-sol pointer-events-none"
              : "text-magenta-sol pointer-events-auto"
            : "text-green-sol pointer-events-none"
        } text-xl mx-5 cursor-pointer hover:text-cyan-sol transition ease-out duration-100`}
      />
    </div>
  )
}

export default Paginator
