module.exports = ({
  clientKey = 'client_acbm',
  brandKey = 'hcl',
  appId = process.env.OMEDA_APP_ID,
  inputId = process.env.OMEDA_INPUT_ID,
  graphqlUri = 'https://graphql.omeda.parameter1.com/',
  promoCodeCookieName,
  promoCodeDefault,
} = {}) => ({
  clientKey,
  brandKey,
  appId,
  inputId,
  graphqlUri,
  promoCodeCookieName,
  promoCodeDefault,
});
