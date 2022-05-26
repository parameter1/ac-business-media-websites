const AutoScroll = () => import(/* webpackChunkName: "common-auto-scroll" */ './auto-scroll.vue');
const CommonCompanySearch = () => import(/* webpackChunkName: "common-company-search" */ './company-search.vue');
const CommonSectionSearch = () => import(/* webpackChunkName: "common-section-search" */ './section-search.vue');
const SpecGuideTable = () => import(/* webpackChunkName: "common-spec-guide-table" */ './spec-guide/table.vue');

export default (Browser) => {
  const { EventBus } = Browser;
  Browser.register('CommonAutoScroll', AutoScroll);
  Browser.register('CommonSpecGuideTable', SpecGuideTable);
  Browser.register('CommonCompanySearch', CommonCompanySearch, {
    provide: { EventBus },
  });
  Browser.register('CommonSectionSearch', CommonSectionSearch, {
    provide: { EventBus },
  });
};
