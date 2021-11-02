const gql = require('graphql-tag');

module.exports = gql`

fragment WebsiteLatestInSectionFragment on Content {
  id
  type
  shortName
  siteContext {
    path
  }
  published
  primaryImage {
    id
    src(input: { options: { auto: "format,compress" } })
    alt
    isLogo
  }
  ... on ContentWebinar {
    startDate
    linkUrl
  }
  ... on ContentEvent {
    startDate
    endDate
  }
}

`;
