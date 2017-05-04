<template>
  <div>
    <loading :show="loading"></loading>
    <div v-if="!loading">
      <ul>
        <li>
          <router-link :to="{name: 'postIndex', query: {tab: 'all'}}">全部</router-link>
        </li>
        <li>
          <router-link :to="{name: 'postIndex', query: {tab: 'good'}}">精华</router-link>
        </li>
        <li>
          <router-link :to="{name: 'postIndex', query: {tab: 'share'}}">分享</router-link>
        </li>
        <li>
          <router-link :to="{name: 'postIndex', query: {tab: 'ask'}}">问答</router-link>
        </li>
      </ul>
      <ul>
        <li v-for="item in posts">
          <router-link :to="{name: 'postDetail', params: {postId: item.id}}">{{item.title}}
          </router-link>
        </li>
      </ul>
      <loading :show="isbusy"></loading>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import loading from '../../components/loading.vue'
  export default {
    data() {
      return {
        posts: [],
        loading: true,
        isbusy: false,
        params: {
          page: 1,
          limit: 30,
          tab: 'all'
  
        }
      }
    },
    mounted() {
      // 初始化数据
      this.init()
      // 滚动加载数据
      window.addEventListener('scroll', () => {
        if (!this.isbusy && document.body.scrollTop + window.innerHeight >= document.body.clientHeight) {
          this.isbusy = true
          this.getPosts()
        }
      })
    },
    watch: {
      $route() {
        this.init()
      }
    },
    methods: {
      init() {
        this.loading = true
        this.params.page = 1
        this.posts = []
        let tab = this.$route.query.tab
        this.params.tab = tab || 'all'
        this.getPosts()
      },
      getPosts() {
        axios.get('topics', {
          params: this.params
        }).then((res) => {
          this.posts = this.posts.concat(res.data.data)
          this.loading = false
          this.isbusy = false
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
