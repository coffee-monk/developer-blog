import React, { useContext } from "react"

import { BlogContext } from "../context/BlogContextProvider"

import PostLink from "./postLink"

const Posts = () => {
  const { state } = useContext(BlogContext)

  const { posts, currentPage, postsPerPage } = state

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <>
      {currentPosts.map(post => (
        <PostLink post={post} key={post.id} />
      ))}
    </>
  )
}

export default Posts
