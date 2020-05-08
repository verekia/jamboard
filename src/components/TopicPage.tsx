import React from 'react'

import { graphql } from 'gatsby'

const TopicPage = ({ data }) => {
  const topic = data.contentfulTopic

  return (
    <div>
      <h1>JamBoard</h1>
      <h2>Topic: {topic.title}</h2>
      {/* <ul>
    {data.allContentfulTopic.edges.map(({ node: t }) => (
      <li key={t.id}>{t.title}</li>
    ))}
  </ul>
  <h3>Create Topic</h3>
  <form>
    <input name="title" required />
    <button type="submit">Create</button>
  </form> */}
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulTopic(id: { eq: $slug }) {
      id
      title
    }
  }
`

export default TopicPage
