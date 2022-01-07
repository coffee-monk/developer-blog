import React, { useEffect, useContext } from "react"

import { BlogContext } from "../context/BlogContextProvider"

import PostLink from "./postLink"

const Posts = () => {
  const { state } = useContext(BlogContext)
  const { posts, filteredPosts, currentPage, postsPerPage, languageFilter } =
    state

  // Get list of posts per pagination
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  let currentPosts = []

  // apply filters and pagination
  if (filteredPosts.length === 0 && languageFilter.length > 0) {
    currentPosts = posts
      .filter(post => languageFilter.includes(post.frontmatter.language))
      .slice(indexOfFirstPost, indexOfLastPost)
  } else if (filteredPosts.length > 0 && languageFilter.length > 0) {
    currentPosts = filteredPosts
      .filter(filteredPost =>
        languageFilter.includes(filteredPost.frontmatter.language)
      )
      .slice(indexOfFirstPost, indexOfLastPost)
  } else if (filteredPosts.length === 0) {
    currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  } else {
    currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
  }

  console.log(currentPosts)
  console.log(languageFilter)

  return (
    <>
      {currentPosts.map(post => (
        <PostLink post={post} key={post.id} />
      ))}
    </>
  )
}

export default Posts
