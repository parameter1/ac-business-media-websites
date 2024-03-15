<template>
  <div class="partners">
    <div>
      <vue-slick-carousel
        v-bind="SlickCarouselSettings"
      >
        <a
          v-for="(partner) in partners"
          :key="partner.id"
          :href="partner.siteContext.path"
          :title="partner.shortName"
          class="partners__link"
          target="_self"
          rel="nofollow"
        >
          <img
            class="partners__logo lazyload"
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            :data-src="getImgSrc(partner.primaryImage.src)"
            :data-srcset="[getImgSrcSet(partner.primaryImage.src)]"
            :alt="partner.shortName"
          >
          <div class="partners__title">
            {{ partner.shortName }}
          </div>
        </a>
      </vue-slick-carousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';

export default {
  components: { VueSlickCarousel },

  props: {
    partners: {
      type: Array,
      required: true,
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
      slidesToShow: 6,
      slidesToScroll: 6,
      touchThreshold: 5,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    },
  }),

  methods: {
    getImgSrc(imagePath) {
      return `${imagePath}?h=360&w=640&pad=5&q=70&fit=fill&fill=solid&fill-color=&w=640&h=360`;
    },
    getImgSrcSet(imagePath) {
      return `${imagePath}?h=360&w=640&pad=5&q=70&fit=fill&fill=solid&fill-color=&w=640&h=360&dpr=2 2x`;
    },
  },
};
</script>
