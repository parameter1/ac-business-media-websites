import gql from '../parse';

const fragment = gql`
fragment SpecProductFragment on Content {
  id
  type
  name
  company {
    id
    name
    canonicalPath
  }
  siteContext { path }
  primaryImage {
    id
    src(input: { options: { auto: "format,compress", q: 70, h: 100, w: 100, mask: "ellipse", fit: "facearea", facepad: 3 } })
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
