const gql = require('graphql-tag');

module.exports = gql`
fragment WebsiteSectionPageFragment on WebsiteSection {
  id
  name
  fullName
  description
  labels
  hierarchy {
    id
    alias
    name
  }
  logo {
    id
    src(input: { options: { auto: "format,compress" } })
  }
}
`;
