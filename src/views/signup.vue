<template>
  <div>
    <div class="page-header">
      <h1 class="text-center">注册</h1>
    </div>
    <form @submit.prevent="onSubmit" class="container">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="用户名" v-model="username">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="密码" v-model="password">
      </div>
      <button class="btn btn-primary btn-block" type="submit">注册</button>
    </form>
  </div>
</template>

<script>
  import {
    site
  } from '../libs/ajax'
  export default {
    data() {
      return {
        username: '',
        password: '',
        alert: ''
      }
    },
    methods: {
      onSubmit() {
        var userObj = {
          username: this.username,
          password: this.password
        }
        site.post('users/signup', userObj).then((res) => {
          localStorage.setItem('token', res.data.token)
          this.$router.push({
            path: '/'
          })
        }).catch((err) => {
          this.$alert(err.response.data.message)
        })
      }
    },
    components: {
      alert
    }
  }
</script>

