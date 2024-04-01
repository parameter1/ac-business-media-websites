import Browser from '@parameter1/base-cms-marko-web/browser';
import Shared from '@ac-business-media/package-global/browser';

const ImageSlider = () => import(/* webpackChunkName: "global-image-slider" */ './image-slider.vue');

Shared(Browser);

Browser.register('SiteImageSlider', ImageSlider);

export default Browser;
