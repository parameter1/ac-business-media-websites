const gql = require('graphql-tag');

module.exports = gql`

fragment WebsiteContentContactUsFragment on Content {
  id
  type
  name
  siteContext {
    path
  }
  primaryImage {
    id
    src(input: { options: { auto: "format,compress" } })
    alt
    isLogo
  }
  ... on ContentContact {
    title
    phone
    publicEmail
  }
}

`;
