import MonoRail from '@parameter1/base-cms-marko-web-theme-monorail/browser';
import Leaders from '@parameter1/base-cms-marko-web-leaders/browser';

const DynamicSiteMenuPositioner = () => import(/* webpackChunkName: "dynamic-site-menu-positioner" */ './dynamic-site-menu-positioner.vue');

export default (Browser) => {
  MonoRail(Browser);
  Leaders(Browser);
  Browser.register('DynamicSiteMenuPositioner', DynamicSiteMenuPositioner);
};
