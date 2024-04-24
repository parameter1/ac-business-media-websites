const gql = require('graphql-tag');

module.exports = gql`
fragment SpecCompanyFragment on Content {
  id
  name
}
`;
