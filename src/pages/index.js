import React, { useEffect, useContext } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Posts from "../components/posts"

import { BlogContext } from "../context/BlogContextProvider"

const IndexPage = ({ data }) => {
  const { state, dispatch } = useContext(BlogContext)

  // set posts in context API
  useEffect(() => {
    dispatch({
      type: "SET_POSTS",
      payload: data.allMarkdownRemark.nodes,
    })
  }, [])

  // update posts per page if state.posts changes
  useEffect(() => {
    dispatch({
      type: "PAGINATOR_TOTAL",
      payload: Math.ceil(state.posts.length / state.postsPerPage),
    })
  }, [state.posts])

  return (
    <Layout>
      <Posts />
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
