<template>
  <form>
    <div class="form-group">
      <label for="username">用户名</label>
      <input type="email" class="form-control" placeholder="">
    </div>
    <div class="form-group">
      <label for="password">密码</label>
      <input type="password" class="form-control" placeholder="">
    </div>
    <div class="form-group">
      <label for="password2">再一次输入密码</label>
      <input type="password" class="form-control" placeholder="">
    </div>
    <div class="form-group">
      <label for="mobile">电话</label>
      <input type="tel" class="form-control" placeholder="">
    </div>
    <div class="form-group">
      <label for="email">邮件</label>
      <input type="email" class="form-control" placeholder="">
    </div>
    <div class="form-group">
      <label for="email">性别</label>
      <label class="radio-inline">
        <input type="radio" name="gender" value="option1"> 男
      </label>
      <label class="checkbox-inline">
        <input type="radio" name="gender" value="option2"> 女
      </label>
    </div>
    <button type="submit" class="btn btn-default">保存</button>
  </form>
</template>

<script>
  import axios from 'axios'
  var instance = axios.create({
    baseURL: 'http://127.0.0.1:3000/api/'
  })
  export default {
    data() {
      return {
        users: []
      }
    },
    mounted() {
      instance.get('users').then((res) => {
        res.data.map((item) => {
          switch (item.role) {
            case 'user':
              item.role = '普通用户'
              break
            case 'admin':
              item.role = '管理员'
              break
            default:
              item.role = '未定义'
          }
          return item.role
        })
        this.users = res.data
      })
    }
  }
</script>

<style lang="scss">
  
</style>
