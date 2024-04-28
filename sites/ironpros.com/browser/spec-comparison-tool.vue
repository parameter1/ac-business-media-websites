<template>
  <table class="table-responsive table-striped mw-full spec-comparison-tool">
    <tbody>
      <tr>
        <td>
          <h2>
            Category Thing
          </h2>
        </td>
        <td
          v-for="(product) in productsWithSpecs"
          :key="product.key"
        >
          <common-link
            v-if="product.siteContext.path"
            :href="product.siteContext.path"
            title="View Product"
            class="spec-comparison-product-link"
            @click="emitProductClick('Product Link', ...arguments)"
          >
            <img
              class="lazyload"
              :src="product.primaryImage.src"
              :alt="product.name"
              height="250"
              width="250"
            >
          </common-link>
        </td>
      </tr>
      <tr>
        <th>
          From:
        </th>
        <td v-for="(product) in productsWithSpecs" :key="product.id">
          <common-link
            v-if="product.company && product.company.canonicalPath"
            :href="product.company.canonicalPath"
            title="View Company"
            class="spec-comparison-company-link"
            @click="emitCompanyClick('Company Link', ...arguments)"
          >
            {{product.company.name}}
          </common-link>
        </td>
      </tr>
      <tr v-for="(spec) in specList" :key="spec.key">
        <th>{{ spec.label }}</th>
        <td v-for="(product) in productsWithSpecs" :key="product.id">
          <product-spec :product="product" :spec="spec" />
        </td>
      </tr>
      <tr>
        <th>See More</th>
        <td v-for="(product) in productsWithSpecs" :key="product.id">
          <div
            v-if="hasSeeMoreLink(product)"
          >
            <a :href="hasSeeMoreLink(product)">
              See More Info!
            </a>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import CommonLink from './common/link.vue';
import ProductSpec from './common/product-spec.vue';
import appendSpecs from './utils/append-specs-to-products';
import generateSpecList from './utils/generate-spec-list';

export default {
  components: {
    ProductSpec,
    CommonLink,
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
    specServiceUrl: {
      type: String,
      require: true,
      default: 'http://host.docker.internal:23335',
    },
  },
  data: () => ({
    isLoading: false,
    hasLoaded: false,
    error: null,
    spec: {},
    specsToAppend: [],
    productsWithSpecs: [],
  }),
  computed: {
    productIds() {
      return this.products.map(({ id }) => id);
    },
    productWithSpecs() {
      return appendSpecs({
        product: this.products,
        specsToAppend: this.specsToAppend,
      });
    },
    specList() {
      return generateSpecList({ specsToAppend: this.specsToAppend });
    },
    canLoad() {
      return !this.isLoading || !this.hasLoaded;
    },
  },
  async created() {
    await this.loadSpecAndAppend();
  },
  methods: {
    async loadSpecs({
      ids,
    } = { ids: [] }) {
      const res = await fetch('/__load-specs', {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          ids,
        }),
      });
      return res.json();
    },
    async loadSpecAndAppend() {
      if (this.canLoad) {
        this.isLoading = true;
        this.error = null;
        // console.log('gettingSPecs', await this.loadSpecs(this.productIds));
        try {
          const specsToAppend = await this.loadSpecs({ ids: this.productIds }) || { specs: [] };
          this.specsToAppend = specsToAppend.specs;
          this.productsWithSpecs = appendSpecs({
            products: this.products,
            specsToAppend: this.specsToAppend,
          });
          this.hasLoaded = true;
        } catch (e) {
          this.error = e;
        } finally {
          this.isLoading = false;
        }
      }
    },
    hasSeeMoreLink(product) {
      const spec = product.specs.filter(({ key, value }) => key === 'seeMore' && value !== '')[0] || {};
      return spec.value;
    },
  },
};
</script>
