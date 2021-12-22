import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function PostTemplate({ data }) {
  const { title, date } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark

  return (
    <Layout>
      <h2>{title}</h2>
      <p className="text-base-01">{date}</p>
      <div className="my-5" dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        date
        title
      }
      html
    }
  }
`
