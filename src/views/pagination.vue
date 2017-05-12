<template>
  <div>
    <div class="page-header">
      <h1 class="text-center">表格分页</h1>
    </div>
    <form @submit.prevent="search">
      <div class="form-group">
        <input type="search" class="form-control" v-model="searchInput">
      </div>
      <button class="btn btn-default" type="submmit">查询</button>
    </form>
    <table class="table">
      <thead>
        <tr>
          <th>序号</th>
          <th>内容</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in posts">
          <td>{{(cur - 1) * limit + index + 1}}</td>
          <td>
            <router-link :to="{name: 'postDetail', params: {postId: item.id}}">{{item.title}}
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <loading :show="busy"></loading>
    <pagination :currentPage="cur" :pageCount="all" @pageChanged="pageChanged"></pagination>
  </div>
</template>

<script>
  import {
    cnode
  } from '../libs/ajax'
  import loading from '../components/loading'
  import pagination from '../components/pagination'
  export default {
    data() {
      return {
        searchInput: '',
        posts: [],
        cur: this.$store.getters.getPage,
        all: 20,
        limit: 10,
        busy: true
      }
    },
    computed: {
      params() {
        let result = {
          page: this.cur,
          limit: this.limit
        }
        if (this.searchInput) {
          result.key = this.searchInput
        }
        return result
      }
    },
    mounted() {
      this.loadData()
    },
    methods: {
      pageChanged(val) {
        this.cur = val
        this.loadData()
      },
      loadData(cb) {
        cnode.get('topics', {
          params: this.params
        }).then((res) => {
          this.posts = res.data.data
          if (typeof cb === 'function') {
            cb(res.data)
          }
          this.busy = false
        })
      },
      search() {
        this.loadData((res) => {
          this.all = 2
          this.cur = 1
        })
      }
    },
    beforeRouteLeave(to, from, next) {
      if (to.name === 'postDetail') {
        this.$store.dispatch('setPage', this.cur)
      } else {
        this.$store.dispatch('setPage', 1)
      }
      next()
    },
    components: {
      loading,
      pagination
    }
  }
</script>

