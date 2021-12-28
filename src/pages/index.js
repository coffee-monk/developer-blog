import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PostLink from "../components/post-link"
import Paginator from "../components/paginator"

const IndexPage = ({ data }) => {
  const [posts] = useState(data.allMarkdownRemark.nodes)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(3)

  console.log(posts)

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <Layout>
      <div>
        {currentPosts.map(post => (
          <PostLink post={post} key={post.id} />
        ))}
      </div>
      <Paginator currentPage={currentPage}></Paginator>
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
