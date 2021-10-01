const gql = require('graphql-tag');

module.exports = gql`

fragment WebsiteContentStructuredDataFragment on Content {
  id
  type
  siteContext {
    path
    canonicalUrl
    noIndex
  }
  primarySection {
    id
    name
  }
  published
  updated
  metadata {
    title
    description
    publishedDate
    updatedDate
    expiresDate
    image {
      id
      src(input: { options: { auto: "format,compress", w: "1200", fit: "max", q: 70 } })
    }
  }
  ... on ContentVideo {
    embedSrc
  }
  ... on Authorable {
    authors {
      edges {
        node {
          id
          name
        }
      }
    }
  }
  images(input:{ pagination: { limit: 0 }, sort: { order: values } }) {
    edges {
      node {
        id
        src(input: { options: { auto: "format,compress", w: "1200", fit: "max", q: 70 } })
      }
    }
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
