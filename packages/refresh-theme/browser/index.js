import DefaultTheme from '@parameter1/base-cms-marko-web-theme-default/browser';
import GTM from '@parameter1/base-cms-marko-web-gtm/browser';
import GAM from '@parameter1/base-cms-marko-web-gam/browser';
import GCSE from '@parameter1/base-cms-marko-web-gcse/browser';
import Inquiry from '@parameter1/base-cms-marko-web-inquiry/browser';
import Leaders from '@parameter1/base-cms-marko-web-leaders/browser';
import Common from '@ac-business-media/package-common/browser';
import SocialSharing from '@parameter1/base-cms-marko-web-social-sharing/browser';
import PhotoSwipe from '@parameter1/base-cms-marko-web-photoswipe/browser';
import RevealAd from '@parameter1/base-cms-marko-web-reveal-ad/browser';
import Radix from '@parameter1/base-cms-marko-web-radix/browser';
import P1Events from '@parameter1/base-cms-marko-web-p1-events/browser';
import OmedaIdentityX from '@parameter1/base-cms-marko-web-omeda-identity-x/browser';

const setP1EventsIdentity = ({ p1events, brandKey, encryptedId }) => {
  if (!p1events || !brandKey || !encryptedId) return;
  p1events('setIdentity', `omeda.${brandKey}.customer*${encryptedId}~encrypted`);
};

export default (Browser) => {
  const { EventBus } = Browser;
  EventBus.$on('identity-x-logout', () => {
    if (window.p1events) window.p1events('setIdentity', null);
  });
  EventBus.$on('omeda-identity-x-authenticated', ({ brandKey, encryptedId }) => {
    setP1EventsIdentity({ p1events: window.p1events, brandKey, encryptedId });
  });
  EventBus.$on('omeda-identity-x-rapid-identify-response', ({ brandKey, encryptedId }) => {
    setP1EventsIdentity({ p1events: window.p1events, brandKey, encryptedId });
  });

  DefaultTheme(Browser);
  Leaders(Browser);
  GTM(Browser);
  GAM(Browser);
  GCSE(Browser);
  Common(Browser);
  Inquiry(Browser);
  SocialSharing(Browser);
  PhotoSwipe(Browser);
  RevealAd(Browser);
  Radix(Browser);
  P1Events(Browser);
  OmedaIdentityX(Browser);
};
