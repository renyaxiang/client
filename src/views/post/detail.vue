<template>
  <div>
    <loading :show="loading"></loading>
    <div v-if="!loading">
      <h1>标题</h1>
      <div v-text="post.title"></div>
      <h1>正文</h1>
      <div v-html="post.content"></div>
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
  import axios from 'axios'
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
      axios.get('topic/' + postId).then((res) => {
        this.post = res.data.data
        this.loading = false
      })
    },
    components: {
      loading
    }
  }
</script>

<<style lang="scss" scoped>
  img{
    max-width: 100%;
  }
</style>

