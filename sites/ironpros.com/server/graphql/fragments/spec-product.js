const gql = require('graphql-tag');

module.exports = gql`
fragment SpecProductFragment on Content {
  id
  name
  primaryImage {
    id
    src(input: { options: { auto: "format,compress" } })
    alt
    isLogo
  }
  company {
    id
    labels
    name
    canonicalPath
  }
}
`;
