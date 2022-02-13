import React, { useEffect, useContext } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PostsBoard from "../components/postsBoard"

import { BlogContext } from "../context/BlogContextProvider"

const IndexPage = ({ data }) => {
  const { state, dispatch } = useContext(BlogContext)
  const { posts, filteredPosts, postsPerPage } = state

  // Format query data of posts array, then sort by date
  const queryData2Posts = data.allMarkdownRemark.nodes
    .map(post => {
      const filteredPostObj = {
        language: post.frontmatter.language,
        slug: post.frontmatter.slug,
        title: post.frontmatter.title,
        id: post.id,
        date: new Date(post.frontmatter.date),
      }
      return filteredPostObj
    })
    .sort((a, b) => b.date - a.date)

  console.log(queryData2Posts)

  // set posts in context API
  useEffect(() => {
    dispatch({
      type: "SET_POSTS",
      payload: queryData2Posts,
    })
  }, [])

  // update pagination pages if posts/filteredPosts changes
  useEffect(() => {
    dispatch({
      type: "PAGINATOR_MAX",
      payload:
        filteredPosts.length === 0
          ? Math.ceil(posts.length / postsPerPage)
          : Math.ceil(filteredPosts.length / postsPerPage),
    })
  }, [posts, filteredPosts])

  return (
    <Layout>
      <PostsBoard />
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
          language
        }
        id
      }
    }
  }
`
