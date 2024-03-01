const gql = require('graphql-tag');

module.exports = gql`
fragment WebsiteDirectorySectionPageFragment on WebsiteSection {
  id
  name
  alias
  fullName
  description
  hierarchy {
    id
    alias
    name
  }
  parent {
    id
    name
    alias
  }
  children(input: { sort: { field: name, order: asc }, pagination: { limit: 50 } }) {
    edges {
      node {
        id
        alias
        name
      }
    }
  }
}
`;
