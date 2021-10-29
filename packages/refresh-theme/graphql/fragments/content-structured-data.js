const gql = require('graphql-tag');

module.exports = gql`

fragment WebsiteContentStructuredDataFragment on Content {
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
