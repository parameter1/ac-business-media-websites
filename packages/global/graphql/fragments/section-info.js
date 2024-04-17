const gql = require('graphql-tag');

module.exports = gql`

fragment GlobalSectionInfoWithLogoFragment on WebsiteSection {
  id
  name
  description
  fullName
  canonicalPath
  logo {
    id
    src(input: { options: { auto: "format,compress" } })
  }
}

`;
