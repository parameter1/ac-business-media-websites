import Browser from '@parameter1/base-cms-marko-web/browser';
import Shared from '@ac-business-media/package-global/browser';

const ImageSlider = () => import(/* webpackChunkName: "site-image-slider" */ './image-slider.vue');
const SpecComparisonTool = () => import(/* webpackChunkName: "site-spec-comparison-tool" */ './spec-comparison-tool.vue');

Shared(Browser);

Browser.register('SiteImageSlider', ImageSlider);
Browser.register('SiteSpecComparison', SpecComparisonTool);

export default Browser;
