import React from 'react'

import { graphql, Link } from 'gatsby'

const IndexPage = ({ data }) => (
  <div>
    <h1>JamBoard</h1>
    <h2>Topics</h2>
    <ul>
      {data.allContentfulTopic.edges.map(({ node: t }) => (
        <li key={t.id}>
          <Link to={`/topic/${t.id}`}>{t.title}</Link>
        </li>
      ))}
    </ul>
    <h3>Create Topic</h3>
    <form>
      <input name="title" required />
      <button type="submit">Create</button>
    </form>
  </div>
)

export const query = graphql`
  query {
    allContentfulTopic {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`

export default IndexPage
