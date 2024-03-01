const gql = require('graphql-tag');

module.exports = gql`
fragment WithContentPrimarySectionFragment on Content {
  primarySection {
    id
    alias
  }
}
`;
