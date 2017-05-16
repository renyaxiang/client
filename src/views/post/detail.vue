<template>
  <div class="container">
    <loading :show="loading"></loading>
    <div v-if="!loading">
      <h1 v-text="post.title"></h1>
      <div v-html="post.content" class="post-content"></div>
      <h1>评论</h1>
      <ul>
        <li v-for="item in post.replies">
          <img :src="item.author.avatar_url" alt="">
          <span v-text="item.author.loginname"></span>
          <span>{{item.create_at | time}}</span>
          <div v-html="item.content"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {
    cnode
  } from '../../libs/ajax'
  import loading from '../../components/loading.vue'
  // import moment from 'moment'
  export default {
    data() {
      return {
        loading: true,
        post: {}
      }
    },
    mounted() {
      let postId = this.$route.params.postId
      cnode.get('topic/' + postId).then((res) => {
        this.post = res.data.data
        this.loading = false
      })
    },
    components: {
      loading
    }
  }
</script>

<style lang="scss">
  .post-content img{
    max-width: 100%
  }
</style>

