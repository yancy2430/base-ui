<template>
  <a-select @search="search" v-bind="$attrs">
    <a-select-option v-for="item in data" :key="item" :value="item">{{ item }}</a-select-option>
  </a-select>
</template>

<script>
import {debounce} from 'lodash-es';

export default {
  name: "TdSelect",
  props: {
    dataSource: {
      type: Function,
    }
  },
  data() {
    return {
      data: [],
      searchKey: '',
      search: '',
    }
  },
  created() {
    this.search = debounce(this.init, 300)
    this.search()
  },
  methods: {
    init(value) {
      this.dataSource(value).then(res => {
        this.data = res.data
      })

    },
  }
}
</script>

<style scoped>

</style>