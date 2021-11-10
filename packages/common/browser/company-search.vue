<template>
  <div ref="companySearch" class="company-search">
    <autocomplete
      :search="searchDebounced"
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

const searchCompanies = (input) => {
  const url = `${path}${encodeURI(input)}`;
  return new Promise((resolve) => {
    if (input.length < 3) {
      resolve([]);
    } else {
      fetch(url)
        .then(response => response.json())
        .then((data) => {
          resolve(data.nodes);
        });
    }
  });
};

export default {
  inject: ['EventBus'],
  components: { Autocomplete },

  methods: {
    searchDebounced(input) {
      return searchCompanies(input);
    },
    // We want to display the title
    getResultValue(result) {
      return result.shortName;
    },
    // Open the selected article in
    // a new window
    handleSubmit(result) {
      this.emitAction();
      window.location.href = result.siteContext.path;
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
