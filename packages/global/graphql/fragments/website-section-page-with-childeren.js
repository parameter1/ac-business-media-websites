const gql = require('graphql-tag');

module.exports = gql`
fragment WebsiteSectionPageFragment on WebsiteSection {
  id
  name
  alias
  fullName
  description
  children(input: { pagination: { limit: 0 } }) {
    edges {
      node {
        id
        alias
        name
      }
    }
  }
  hierarchy {
    id
    alias
    name
  }
}
`;
