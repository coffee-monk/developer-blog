import React, { useState, useEffect, useContext } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PostLink from "../components/post-link"

import { BlogContext } from "../context/BlogContextProvider"

const IndexPage = ({ data }) => {
  const [posts] = useState(data.allMarkdownRemark.nodes)
  const postsPerPage = 3

  const { state, dispatch } = useContext(BlogContext)

  useEffect(() => {
    dispatch({
      type: "TOTAL_PAGES",
      payload: Math.ceil(posts.length / postsPerPage),
    })
  }, [])

  // Get current posts
  const indexOfLastPost = state.currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <Layout>
      <div>
        {currentPosts.map(post => (
          <PostLink post={post} key={post.id} />
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          date
          slug
          title
          lang
        }
        id
      }
    }
  }
`
