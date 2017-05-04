<template>
  <div>
    <div class="page-header">
      <h1 class="text-center">登录</h1>
    </div>
    <alert v-if="alert" :msg="alert"></alert>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="用户名" v-model="username">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="密码" v-model="password">
      </div>
      <button class="btn btn-default">登录</button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'
  import alert from '../components/alert'
  var instance = axios.create({
    baseURL: 'http://127.0.0.1:3000/api/'
  })
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
        instance.post('users/login', userObj).then((res) => {
          localStorage.setItem('token', res.data.token)
          this.$store.dispatch('setToken', res.data.token)
          let path = this.$route.query.redirect || '/'
          window.location.href = path
        }).catch((err) => {
          this.alert = err.response.data.message
        })
      }
    },
    components: {
      alert
    }
  }
</script>

<style lang="scss">
  
</style>
