export const createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      allContentfulTopic {
        edges {
          node {
            id
          }
        }
      }
    }
  `)
  data.allContentfulTopic.edges.forEach(({ node: topic }) => {
    const slug = topic.id
    actions.createPage({
      path: `/topic/${slug}`,
      component: require.resolve('./src/components/TopicPage.tsx'),
      context: { slug },
    })
  })
}
