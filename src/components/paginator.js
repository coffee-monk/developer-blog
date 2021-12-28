import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"

const Paginator = () => {
  return (
    <div className="flex flex-wrap items-center justify-center">
      <FontAwesomeIcon
        icon={faAngleLeft}
        className="mx-5 text-xl text-magenta-sol"
      />
      <h1 className="text-green-sol">NUMBER</h1>
      <FontAwesomeIcon
        icon={faAngleRight}
        className="text-magenta-sol text-xl mx-5"
      />
    </div>
  )
}

export default Paginator
