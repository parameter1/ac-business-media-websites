const gql = require('graphql-tag');

module.exports = gql`
fragment GlobalDynamicPageFragment on ContentPage {
  id
  type
  name
  body
  published
  primarySection {
    id
    name
    alias
  }
}
`;
