<template>
  <div ref="companySearch" class="company-search">
    <autocomplete
      ref="autocomplete"
      :search="searchCompanies"
      :class="errorClass"
      placeholder="Search Companies..."
      aria-label="Search Companies..."
      :get-result-value="getResultValue"
      :debounce-time="500"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import Autocomplete from '@trevoreyre/autocomplete-vue';

const path = '/__company-search?searchQuery=';

export default {
  inject: ['EventBus'],
  components: { Autocomplete },

  data: () => ({
    errorClass: '',
  }),

  methods: {
    // We want to display the title
    getResultValue(result) {
      return result.shortName;
    },
    // Open the selected article in
    // a new window
    handleSubmit(result) {
      // Handle when the result is an error or missing context link
      if (!result.siteContext || !result.siteContext.path) {
        this.$refs.autocomplete.value = '';
        return;
      }

      this.emitAction();
      window.location.href = result.siteContext.path;
    },
    async searchCompanies(input) {
      this.errorClass = '';
      const url = `${path}${encodeURI(input)}`;
      if (input.length < 3) {
        return [];
      }
      const res = await fetch(url);
      const json = await res.json();
      if (!res.ok) {
        const errorMessage = json.message || res.statusText;
        const errorNode = {
          id: 'error',
          shortName: `ERROR: ${errorMessage}`,
        };
        // Instead of `throw new Error(errorNode);` return message as result
        this.errorClass = 'errors';
        return [errorNode];
      }
      return json.nodes;
    },
    emitAction() {
      const payload = {
        category: 'Content Header Search',
        action: 'Click',
        label: 'Website Section Page',
      };
      this.EventBus.$emit('content-header-search', payload);
    },
  },
};
</script>
