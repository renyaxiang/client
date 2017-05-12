<template>
  <div>
    <div class="page-header">
      <h1 class="text-center">列表滚动加载</h1>
    </div>
    <ul class="list-unstyled" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
      <li v-for="item in posts">
        <router-link :to="{name: 'postDetail', params: {postId: item.id}}">{{item.title}}
        </router-link>
      </li>
    </ul>
    <loading :show="busy"></loading>
  </div>
</template>

<script>
  import {
    cnode
  } from '../libs/ajax'
  import loading from '../components/loading.vue'
  export default {
    data() {
      return {
        posts: [],
        busy: false,
        params: {
          page: 1,
          limit: 10
        }
      }
    },
    methods: {
      loadMore() {
        this.busy = true
        cnode.get('topics', {
          params: this.params
        }).then((res) => {
          this.posts = this.posts.concat(res.data.data)
          this.busy = false
          this.params.page++
        })
      }
    },
    components: {
      loading
    }
  }
</script>

<style lang="scss">
  
</style>
