<template>
  <div>
    <form class="row">
      <div class="col-xl-6 col-lg-8">
        <field-search
          :columns="visibleColumnList"
          :selected="selectedSearchKey"
          :disabled="isLoading"
          :phrase="searchPhrase"
          @field-change="setSelectedSearchKey"
          @phrase-change="setSearchPhrase"
        />
        <measure-select
          :measures="measureList"
          :selected="selectedMeasureKey"
          :disabled="isLoading"
          @change="setSelectedMeasureKey"
        />
        <field-sort
          :columns="visibleColumnList"
          :selected="selectedSortKey"
          :direction="sortDirection"
          :disabled="isLoading"
          @field-change="setSelectedSortKey"
          @direction-change="setSortDirection"
        />
      </div>
    </form>
    <div class="table-responsive">
      <table ref="table" class="table table-striped table-hover table-sm w-100 small">
        <thead class="thead-dark">
          <tr>
            <th
              v-for="col in visibleColumnList"
              :key="`${col.key}-header`"
              class="text-center align-middle"
            >
              {{ col.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="isLoading">
            <td :colspan="visibleColumnList.length">
              Loading data...
            </td>
          </tr>
          <tr v-else-if="error">
            <td :colspan="visibleColumnList.length">
              Error: {{ error.message }}
            </td>
          </tr>
          <tr v-for="(row, index) in sortedRows" v-else :key="index">
            <td
              v-for="col in visibleColumnList"
              :key="`${col.key}-row-${index}`"
              class="text-center"
            >
              <template v-if="row[col.key].htmlValue">
                <!-- eslint-disable-next-line vue/no-v-html -->
                <span v-html="row[col.key].htmlValue" />
              </template>
              <template v-else>
                {{ row[col.key].displayValue }}
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
import { get } from 'object-path';
import escapeRegex from './utils/escape-regex';
import parseNumber from './utils/parse-number';
import MeasureSelect from './measure-select.vue';
import FieldSearch from './field-search.vue';
import FieldSort from './field-sort.vue';

const { isArray } = Array;
const { keys } = Object;

export default {
  /**
   *
   */
  components: {
    MeasureSelect,
    FieldSearch,
    FieldSort,
  },

  /**
   *
   */
  props: {
    sheetSrc: {
      type: String,
      required: true,
    },
    columns: {
      type: Object,
      default: () => ({}),
    },
    measures: {
      type: Object,
      default: () => ({}),
    },
    initialMeasureKey: {
      type: String,
      default: function defaultKey() {
        return keys(this.measures)[0];
      },
    },
    initialSearchKey: {
      type: String,
      default: function defaultKey() {
        return keys(this.columns)[0];
      },
    },
    driftPercent: {
      type: Number,
      default: 0.1,
      validate: v => v >= 0 && v <= 1,
    },
  },

  /**
   *
   */
  data: () => ({
    isLoading: false,
    error: null,
    activeMeasureKey: null,
    activeSearchKey: null,
    selectedSortKey: null,
    searchPhrase: null,
    sortDirection: 1,
    rows: [],
  }),

  /**
   *
   */
  computed: {
    /**
     *
     */
    selectedMeasureKey() {
      const { activeMeasureKey } = this;
      if (activeMeasureKey) return activeMeasureKey;
      return this.initialMeasureKey;
    },

    /**
     *
     */
    selectedSearchKey() {
      const { activeSearchKey } = this;
      if (activeSearchKey) return activeSearchKey;
      return this.initialSearchKey;
    },

    /**
     *
     */
    measureList() {
      const { measures } = this;
      const measureKeys = keys(measures);
      return measureKeys.map((key) => {
        const measure = measures[key];
        return { ...measure, key, label: measure.label || key };
      });
    },

    /**
     *
     */
    selectedMeasure() {
      const { selectedMeasureKey } = this;
      if (!selectedMeasureKey) return undefined;
      return this.measures[selectedMeasureKey];
    },

    /**
     *
     */
    columnList() {
      const { columns } = this;
      const colKeys = keys(columns);
      return colKeys.map((key) => {
        const col = columns[key];
        return { ...col, key, label: col.label || key };
      });
    },

    /**
     *
     */
    visibleColumnList() {
      const { columnList, selectedMeasure, selectedMeasureKey } = this;
      if (!selectedMeasure) return columnList.filter(col => !col.hidden).slice();
      const visible = columnList
        .filter(col => ((!col.measure || col.measure === selectedMeasureKey) && !col.hidden));
      return visible;
    },

    /**
     *
     */
    filteredRows() {
      const { searchPhrase, selectedSearchKey } = this;
      if (!searchPhrase) return this.rows;
      const column = this.getColumn(selectedSearchKey);
      if (column.type === 'number') return this.filterByNumber({ key: selectedSearchKey, phrase: searchPhrase });
      return this.filterByRegex({ key: selectedSearchKey, phrase: searchPhrase });
    },

    /**
     *
     */
    sortedRows() {
      const { selectedSortKey, sortDirection, filteredRows } = this;
      if (!selectedSortKey) return filteredRows;
      const column = this.getColumn(selectedSortKey);
      if (column.type === 'number') {
        return filteredRows.sort((rowA, rowB) => {
          if (sortDirection === 1) {
            const { min: a } = get(rowA, selectedSortKey);
            const { min: b } = get(rowB, selectedSortKey);
            return this.sortValues(a, b, sortDirection);
          }
          const { max: a } = get(rowA, selectedSortKey);
          const { max: b } = get(rowB, selectedSortKey);
          return this.sortValues(a, b, sortDirection);
        });
      }
      return filteredRows.sort((rowA, rowB) => {
        const { displayValue: a } = get(rowA, selectedSortKey);
        const { displayValue: b } = get(rowB, selectedSortKey);
        return this.sortValues(a, b, sortDirection);
      });
    },
  },

  /**
   *
   */
  created() {
    this.loadData();
  },

  /**
   *
   */
  methods: {
    /**
     *
     */
    setSelectedMeasureKey(key) {
      this.activeMeasureKey = key;
      const { selectedSearchKey } = this;
      if (selectedSearchKey) {
        const col = this.getColumn(selectedSearchKey);
        if (col && col.measure) {
          this.searchPhrase = null;
          this.selectedSortKey = null;
        }
      }
    },

    /**
     *
     */
    setSelectedSearchKey(key) {
      this.activeSearchKey = key;
      this.searchPhrase = null;
    },

    /**
     *
     */
    setSearchPhrase(phrase) {
      this.searchPhrase = phrase;
    },

    /**
     *
     */
    setSelectedSortKey(key) {
      this.selectedSortKey = key;
    },

    /**
     *
     */
    setSortDirection(direction) {
      this.sortDirection = direction;
    },

    sortValues(a, b, direction) {
      if (a > b) return 1 * direction;
      if (a < b) return -1 * direction;
      return 0;
    },

    /**
     *
     */
    getColumn(key) {
      return this.columns[key];
    },

    /**
     *
     */
    getDisplayValue(col, row) {
      const { key } = col;
      const value = get(row, key);
      if (!value) return '';
      if (value.invalidNumber) return value.raw || '';
      if (value.hasRange) return `${value.min} - ${value.max}`;
      if (value.min != null) return value.min;
      return value.raw;
    },

    /**
     *
     */
    getCompanyHtmlValue(col, row) {
      const { key } = col;
      const value = get(row, key);
      const companyLink = this.getDisplayValue({ key: 'link' }, row);
      const featured = this.getDisplayValue({ key: 'featured' }, row);
      if (featured && companyLink) {
        return `<a href="${companyLink}" target="_blank"><strong>${value.raw}</strong></a>`;
      }
      return false;
    },

    /**
     *
     */
    filterByRegex({ key, phrase }) {
      const { rows } = this;
      if (!phrase) return rows;
      const tokens = escapeRegex(phrase).replace(/\s\s+/, ' ').split(' ');
      const pattern = new RegExp(`${tokens.join('|')}`, 'i');
      return this.rows.filter((row) => {
        const { displayValue } = get(row, key);
        return pattern.test(displayValue);
      });
    },

    /**
     *
     */
    filterByNumber({ key, phrase }) {
      const tuple = parseNumber({ value: phrase });
      if (tuple == null) return [];
      const [n] = tuple;

      const exponent = `${parseInt(Math.abs(n), 10)}`.length - 1;
      const drift = (10 ** exponent) * this.driftPercent;
      const min = n - drift;
      const max = n + drift;

      return this.rows.filter((row) => {
        const val = get(row, key);
        if (!val) return false;
        if (val.hasRange) {
          return (min >= val.min && min <= val.max) || (max >= val.min && max <= val.max);
        }
        return val.min >= min && val.min <= max;
      });
    },

    getSourceValue(row, key) {
      return get(row, key);
    },

    /**
     *
     */
    async loadData() {
      this.error = null;
      this.isLoading = true;

      try {
        const { sheetSrc } = this;
        if (!sheetSrc) throw new Error('No data source was provided.');
        const res = await fetch(sheetSrc);
        if (!res.ok) throw new Error('Network error encountered when retrieving data.');
        const json = await res.json();

        // Added google API v4 from v3 support to have set data from unkeyed rows to keyed rows by column header
        const unKeyed = get(json, 'values');
        const sheetKeys = unKeyed.shift().map(v => v.toLowerCase().replace(/\s+|[,()/]/g, ''));
        let rows = unKeyed.map((row) => {
          const keyedRow = {};
          sheetKeys.forEach((key, index) => {
            keyedRow[key] = row[index];
          });
          return keyedRow;
        });

        // Format/simplify the raw data.
        this.rows = isArray(rows) ? rows.map((row) => {
          const newRow = this.columnList.reduce((o, col) => {
            const { key } = col;
            const raw = this.getSourceValue(row, key);
            const values = { raw };
            if (isArray(col.range) && col.range.length === 2) {
              // dependends on other spreadsheet fields for low/high values.
              const [lowKey, highKey] = col.range;
              const lowRaw = this.getSourceValue(row, lowKey);
              const highRaw = this.getSourceValue(row, highKey);

              const lowRange = parseNumber({ value: lowRaw });
              const highRange = parseNumber({ value: highRaw });

              if (lowRange && highRange) {
                // both ranges were parsed successfully.
                // use the min of the lowest, and the max of the highest.
                const [lowMin] = lowRange;
                const [, highMax] = highRange;
                values.min = lowMin;
                values.max = highMax;
                values.hasRange = values.min !== values.max;
              } else if (lowRange) {
                // only a low range was parsed. use min/max of it.
                const [min, max] = lowRange;
                values.min = min;
                values.max = max;
                values.hasRange = min !== max;
              } else if (highRange) {
                // only a high range was parsed. use min/max of it.
                const [min, max] = highRange;
                values.min = min;
                values.max = max;
                values.hasRange = min !== max;
              } else {
                values.raw = lowRaw || highRaw;
                values.min = 0;
                values.max = 0;
                values.hasRange = false;
                values.invalidNumber = true;
              }
            } else if (col.type === 'number') {
              // single number.
              const range = parseNumber({ value: raw });
              if (range) {
                const [min, max] = range;
                values.min = min;
                values.max = max;
                values.hasRange = min !== max;
              } else {
                values.min = 0;
                values.max = 0;
                values.hasRange = false;
                values.invalidNumber = true;
              }
            }
            return { ...o, [key]: values };
          }, {});

          // calculate display value off of formatted row.
          this.columnList.forEach((col) => {
            const displayValue = this.getDisplayValue(col, newRow);
            newRow[col.key].displayValue = displayValue;
            if (col.key === 'company') {
              const companyHtmlValue = this.getCompanyHtmlValue(col, newRow);
              if (companyHtmlValue) newRow[col.key].htmlValue = companyHtmlValue;
            }
          });
          return newRow;
        }) : [];
        // clear the rows after mapping to allow for gc.
        rows = [];
      } catch (e) {
        this.error = e;
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>
