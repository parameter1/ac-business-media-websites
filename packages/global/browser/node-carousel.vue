<template>
  <div class="node-carousel">
    <div>
      <vue-slick-carousel
        v-bind="SlickCarouselSettings"
      >
        <div
          v-for="(node) in nodes"
          :key="node.id"
          class="node node--carousel"
        >
          <div class="node__contents node__contents--carousel">
            <a
              :href="node.siteContext.path"
              :title="node.shortName"
              class="node__link node__image-wrapper node__image-wrapper--carousel"
              rel="nofollow"
            >
              <img
                class="node__image node__image--carousel lazyload"
                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                :data-src="getImgSrc(node.primaryImage.src)"
                :data-srcset="[getImgSrcSet(node.primaryImage.src)]"
                :alt="node.shortName"
                :width="imageOptions.w"
                :height="imageOptions.h"
              >
            </a>
            <a
              :href="node.siteContext.path"
              :title="node.shortName"
              class="node__link"
              rel="nofollow"
            >
              <div class=" node__body node__body--carousel">
                <h5 class="node__title">
                  {{ node.shortName }}
                </h5>
                <div
                  v-if="withTeaser"
                  class="node__teaser"
                >
                  {{ node.teaser }}
                </div>
              </div>
            </a>
            <a
              v-if="withCompany"
              :href="node.company.canonicalPath"
              class="node__company"
            >
              {{ node.company.name }}
            </a>
          </div>
        </div>
      </vue-slick-carousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';

export default {
  components: { VueSlickCarousel },

  props: {
    nodes: {
      type: Array,
      required: true,
    },
    withTeaser: {
      type: Boolean,
      default: false,
    },
    withCompany: {
      type: Boolean,
      default: false,
    },
    imageOptions: {
      type: Object,
      default: () => ({
        fit: 'crop',
        w: 250,
        h: 140,
      }),
    },
  },

  data: () => ({
    SlickCarouselSettings: {
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 1000,
      variableWidth: false,
      dots: false,
      arrows: true,
      focusOnSelect: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      touchThreshold: 5,
      responsive: [
        {
          breakpoint: 1220,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    },
  }),

  methods: {
    getImagePath(imagePath, withDpr = false) {
      const imageParams = new URLSearchParams({
        ...this.imageOptions,
      });
      const src = imagePath.split('?')[0];
      return withDpr
        ? `${src}?${imageParams.toString()}&dpr=2 2x`
        : `${src}?${imageParams.toString()}`;
    },
    getImgSrc(imagePath) {
      return this.getImagePath(imagePath, false);
    },
    getImgSrcSet(imagePath) {
      return this.getImagePath(imagePath, true);
    },
  },
};
</script>
