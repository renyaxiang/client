<template>
  <div>
    <div class="page-header">
      <h1 class="text-center">输入防抖动</h1>
    </div>
    <input type="search" class="form-control" v-model="searchQuery">
    <div class="alert">{{searchIndicator}}</div>
    <table class="table">
      <thead>
        <tr>
          <td>内容</td>
          <td>时间</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in datas">
          <td>{{item.text}}</td><td> {{item.time | time('YY-MM-DD hh:mm:ss')}}</td>
        </tr>
      </tbody>
    </table>
    <loading :show="isCalculating"></loading>
  </div>
</template>

<script>
  import loading from '../components/loading'
  import _ from 'lodash'
  export default {
    data() {
      return {
        searchQuery: '',
        searchQueryIsDirty: false,
        isCalculating: false,
        datas: []
      }
    },
    computed: {
      searchIndicator: function () {
        if (this.isCalculating) {
          return 'Fetching new results'
        } else if (this.searchQueryIsDirty) {
          return 'Typing...'
        } else {
          return 'Done'
        }
      }
    },
    watch: {
      searchQuery: function () {
        this.searchQueryIsDirty = true
        this.search()
      }
    },
    methods: {
      search: _.debounce(function () {
        this.isCalculating = true
        // feching new results
        setTimeout(function () {
          this.isCalculating = false
          this.searchQueryIsDirty = false
          this.datas.push({
            text: this.searchQuery,
            time: Date.now()
          })
        }.bind(this), 500)
      }, 500)
    },
    components: {
      loading
    }
  }
</script>
