import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import PostLink from "../components/post-link"

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes
  console.log(posts)

  return (
    <Layout>
      <div>
        {posts.map(post => (
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
