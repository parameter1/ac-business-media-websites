import gql from '../parse';

const fragment = gql`
fragment SpecCompanyFilterFragment on Content {
  id
  type
  name
}
`;

export default gql`
query SpecCompanyFilterContent ($input: WebsiteScheduledContentQueryInput!) {
  websiteScheduledContent(input: $input) {
    totalCount
    edges {
      node {
        ...SpecCompanyFilterFragment
      }
    }
  }
}

${fragment}
`;
