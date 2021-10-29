const gql = require('graphql-tag');

module.exports = gql`

fragment WebsiteContentStructuredDataFragment on Content {
  primarySection {
    id
    name
  }
  taxonomy {
    edges {
      node {
        id
        name
      }
    }
  }
}

`;
