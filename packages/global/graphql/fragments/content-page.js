const gql = require('graphql-tag');
const qf = require('@parameter1/base-cms-marko-web-theme-monorail/graphql/fragments/content-page');

const factory = ({ useLinkInjectedBody = false, withMagazineSchedules = false } = {}) => {
  const monorailFragment = qf.factory ? qf.factory(
    { useLinkInjectedBody, withMagazineSchedules },
  ) : qf;

  const fragment = gql`

  fragment LocalContentPageFragment on Content {
    ... on ContentCompany {
      bannerImagePath: customAttribute(input: { path: "bannerImagePath" })
      yearsInOperation
      numberOfEmployees
      salesRegion
      salesChannels
      warrantyInformation
      serviceInformation
      trainingInformation
      servicesProvided
    }
    websiteSchedules {
      section {
        id
        alias
        name
        fullName
      }
    }
    ...ContentPageFragment
  }
  ${monorailFragment}


  `;
  fragment.factory = factory;
  return fragment;
};

module.exports = factory();
