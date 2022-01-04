import React, { useContext } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"

import { BlogContext } from "../context/BlogContextProvider"

function Paginator() {
  const { state, dispatch } = useContext(BlogContext)
  return (
    <div className="flex flex-wrap items-center justify-center">
      <FontAwesomeIcon
        onClick={() => dispatch({ type: "DECREMENT" })}
        icon={faAngleLeft}
        className="text-magenta-sol text-xl mx-5 cursor-pointer hover:text-cyan-sol transition ease-out duration-100"
      />
      <h1 className="text-green-sol">{state.currentPage}</h1>
      <FontAwesomeIcon
        onClick={() => dispatch({ type: "INCREMENT" })}
        icon={faAngleRight}
        className="text-magenta-sol text-xl mx-5 cursor-pointer hover:text-cyan-sol transition ease-out duration-100"
      />
    </div>
  )
}

export default Paginator
