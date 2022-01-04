import React from "react"

const DropdownSorter = () => {
  return (
    <div className="relative inline-block text-left">
      <div>Options</div>

      <div className="origin-top-right absolute right-0 mt-2 w-56 ">
        <ul className="py-1">
          <li className="px-4 py-2">Python</li>
          <li className="px-4 py-2">Javascript</li>
          <li className="px-4 py-2">HTML/CSS</li>
        </ul>
      </div>
    </div>
  )
}

export default DropdownSorter
