import React, { useContext, useEffect } from "react"

import { BlogContext } from "../context/BlogContextProvider"

import PostLink from "./postLink"

const Posts = () => {
  const { state } = useContext(BlogContext)
  const { posts, filteredPosts, currentPage, postsPerPage } = state

  // Get list of posts per pagination
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  let currentPosts

  if (filteredPosts.length === 0) {
    currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  } else {
    currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
  }

  console.log(currentPosts)

  return (
    <>
      {currentPosts.map(post => (
        <PostLink post={post} key={post.id} />
      ))}
    </>
  )
}

export default Posts
