<template>
  <dl class="dl-horizontal">
    <dt>用户名</dt>
    <dd>{{user.username}}</dd>
    <dt>性别</dt>
    <dd>{{user.gender}}</dd>
    <dt>角色</dt>
    <dd>{{user.role}}</dd>
    <dt>电话</dt>
    <dd>{{user.mobile}}</dd>
    <dt>邮箱</dt>
    <dd>{{user.email}}</dd>
    <dt>创建时间</dt>
    <dd>{{user.create_time | time}}</dd>
    <dt>更新时间</dt>
    <dd>{{user.update_time | time}}</dd>
  </dl>
</template>

<script>
  import axios from 'axios'
  var instance = axios.create({
    baseURL: 'http://127.0.0.1:3000/api/'
  })
  export default {
    data() {
      return {
        user: null
      }
    },
    mounted() {
      let id = this.$route.params.id
      instance.get('users/' + id).then((res) => {
        let _user = res.data
        _user.gender = _user.gender === 0 ? '男' : '女'
        _user.role = _user.role === 'user' ? '普通用户' : '管理员'
        this.user = _user
      })
    }
  }
</script>

<style lang="scss">
  
</style>
