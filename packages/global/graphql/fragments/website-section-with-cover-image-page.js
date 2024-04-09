const gql = require('graphql-tag');

module.exports = gql`
fragment WebsiteSectionWithCoverImagePageFragment on WebsiteSection {
  id
  name
  alias
  fullName
  description
  coverImage {
    id
    src(input: { options: { auto: "format,compress" } })
  }
  hierarchy {
    id
    alias
    name
    coverImage {
      id
      src(input: { options: { auto: "format,compress" } })
    }
  }
}
`;
