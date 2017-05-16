<template>
  <div>
    <div class="page-header">
      <h1 class="text-center">登录</h1>
    </div>
    <form @submit.prevent="onSubmit" class="container">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="用户名" v-model="username">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="密码" v-model="password">
      </div>
      <button class="btn btn-primary btn-block">登录</button>
      <div class="signup">
        <router-link to="/signup">立即注册</router-link>        
      </div>
    </form>
  </div>
</template>

<script>
  import {
    site
  } from '../libs/ajax.js'
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      onSubmit() {
        var userObj = {
          username: this.username,
          password: this.password
        }
        site.post('users/login', userObj).then((res) => {
          localStorage.setItem('token', res.data.token)
          this.$store.dispatch('setToken', res.data.token)
          let path = this.$route.query.redirect || '/'
          window.location.href = path
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

<style lang="scss">
  .wp100{
    width: 100%;
  }
  .signup{
    float: right;
    margin-top: 10px;
  }
</style>
