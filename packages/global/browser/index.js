import GCSE from '@parameter1/base-cms-marko-web-gcse/browser';
import MonoRail from '@parameter1/base-cms-marko-web-theme-monorail/browser';
import Leaders from '@parameter1/base-cms-marko-web-leaders/browser';

const GlobalCompanySearch = () => import(/* webpackChunkName: "global-company-search" */ './company-search.vue');
const GlobalSectionSearch = () => import(/* webpackChunkName: "global-section-search" */ './section-search.vue');
const GlobalSpecGuideTable = () => import(/* webpackChunkName: "global-spec-guide-table" */ './spec-guide/table.vue');
const DynamicSiteMenuPositioner = () => import(/* webpackChunkName: "dynamic-site-menu-positioner" */ './dynamic-site-menu-positioner.vue');

export default (Browser) => {
  const { EventBus } = Browser;
  GCSE(Browser);
  MonoRail(Browser);
  Leaders(Browser);
  Browser.register('GlobalSpecGuideTable', GlobalSpecGuideTable);
  Browser.register('DynamicSiteMenuPositioner', DynamicSiteMenuPositioner);
  Browser.register('GlobalCompanySearch', GlobalCompanySearch, {
    provide: { EventBus },
  });
  Browser.register('GlobalSectionSearch', GlobalSectionSearch, {
    provide: { EventBus },
  });
};
