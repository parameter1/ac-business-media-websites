import gql from '../parse';

const fragment = gql`
fragment SpecProductFragment on Content {
  id
  type
  name

  ... on ContentProduct {
    downloadUrl
  }

  company {
    id
    name
    canonicalPath
  }
  siteContext { path }
  primaryImage {
    id
    src(input: { options: { auto: "format,compress", q: 70, h: 300, w: 300, fit: "fillmax" } })
  }
}
`;

export default gql`
query SpecProductContent ($input: WebsiteScheduledContentQueryInput!) {
  websiteScheduledContent(input: $input) {
    totalCount
    edges {
      node {
        ...SpecProductFragment
      }
    }
  }
}

${fragment}
`;
