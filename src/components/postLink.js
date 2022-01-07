import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faJs,
  faPython,
  faCss3Alt,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons"
import { faFileAlt } from "@fortawesome/free-solid-svg-icons"

const PostLink = ({ post }) => {
  const { slug, title, date, language } = post.frontmatter
  const id = post.id

  let icon
  switch (language) {
    case "Python":
      icon = faPython
      break
    case "Javascript":
      icon = faJs
      break
    case "CSS":
      icon = faCss3Alt
      break
    case "Node":
      icon = faNodeJs
      break
    default:
      icon = faFileAlt
      break
  }

  return (
    <>
      <Link to={"/posts/" + slug} key={id}>
        <div className="flex items-center justify-between border-base-02 border-2 rounded-lg p-2 my-2 hover:border-green-sol hover:text-cyan-sol transition ease-out duration-100">
          <div>
            <h3>{title}</h3>
            <p className="text-base-01">{date}</p>
          </div>
          <FontAwesomeIcon className="text-5xl" icon={icon} />
        </div>
      </Link>
    </>
  )
}

export default PostLink
