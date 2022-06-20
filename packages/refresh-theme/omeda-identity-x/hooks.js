module.exports = ({
  idxConfig,
  idxOmedaRapidIdentifyProp = '$idxOmedaRapidIdentify',
}) => {
  const identify = (req, payload) => {
    const idxOmedaRapidIdentify = req[idxOmedaRapidIdentifyProp];
    if (!idxOmedaRapidIdentify) throw new Error(`Unable to find the IdentityX+Omeda rapid identifier on the request using ${idxOmedaRapidIdentifyProp}`);
    return idxOmedaRapidIdentify(payload);
  };

  /**
   * 1. Set the `Parameter1` promo code when the email is supplied.
   */
  idxConfig.addHook({
    name: 'onLoginLinkSent',
    fn: async ({ req, user }) => identify(req, { user, promoCode: 'Parameter1' }),
  });

  /**
   * 2. Set the `P1Verified` promo code when the user clicks the verification link.
   */
  idxConfig.addHook({
    name: 'onAuthenticationSuccess',
    fn: async ({ req, user }) => identify(req, { user, promoCode: 'P1Verified' }),
  });

  /**
   * 3. Set the `P1FullProfile` promo code when the user submits their user profile
   */
  idxConfig.addHook({
    name: 'onUserProfileUpdate',
    fn: async ({ req, user }) => identify(req, { user, promoCode: 'P1FullProfile' }),
  });
};
