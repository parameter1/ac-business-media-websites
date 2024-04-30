<template>
  <div v-html="value" />
</template>

<script>
import getAsArray from '../utils/get-as-array';
import getAsObject from '../utils/get-as-object';

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
    spec: {
      type: Object,
      require: true,
      default: () => ({}),
    },
  },
  data: () => ({}),
  computed: {
    specKey() {
      const { key } = this.spec;
      return key;
    },
    value() {
      const specs = getAsArray(this.product, 'specs');
      const productValues = specs.filter(({ key }) => key === this.specKey) || [];
      const { value } = getAsObject(productValues, 0);
      return value;
    },
  },
};
</script>
