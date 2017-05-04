<template>
  <div class="container">
    <form class="form-note" @submit.prevent="onSubmit">
      <input type="text" class="form-control" v-model="title " placeholder="标题" required autofocus>
      <textarea class="form-control" rows="8" v-model="content" placeholder="正文" required></textarea>
      <button class="btn btn-lg btn-primary btn-block" type="submit">发布</button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        title: '',
        content: ''
      }
    },
    methods: {
      onSubmit() {
        var noteObj = {
          title: this.title,
          content: this.content
        }
        axios.post('posts', noteObj).then((res) => {
          this.$router.push({
            name: 'postDetail',
            params: {
              postId: res.data._id
            }
          })
        }).catch((err) => {
          this.errorMsg = err.response.data.message
        })
      }
    }
  }
</script>

<style>
  .form-note {
    margin-top: 20px;
  }
  
  .form-note input,
  .form-note textarea {
    margin-bottom: 20px;
  }
</style>
