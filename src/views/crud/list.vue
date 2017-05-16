<template>
  <div>
    <alert v-if="alert" :msg="alert"></alert>  
    <router-link :to="{name: 'crudCreate'}">
      <button class="btn btn-default">新增</button>
    </router-link>
    <table class="table">
      <thead>
        <tr>
          <th>用户名</th>
          <th>创建时间</th>
          <th>角色</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in users">
          <td>{{item.username}}</td>
          <td>{{item.create_date | time}}</td>
          <td>{{item.role}}</td>
          <td>
            <router-link :to="{name: 'crudDetail', params: {userId: item._id}}">
              <button class="btn btn-default btn-sm">查看</button>
            </router-link>
            <router-link :to="{name: 'crudUpdate', params: {userId: item._id}}"><button class="btn btn-default btn-sm">编辑</button></router-link>
            <button class="btn btn-default btn-sm btn-danger" @click="del(item._id, item.username)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import {
    site
  } from '../../libs/ajax'
  import alert from '../../components/alert'
  export default {
    data() {
      return {
        users: [],
        alert: ''
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        site.get('users').then((res) => {
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
      },
      del(id, username) {
        site.delete('users/' + id).then((res) => {
          this.alert = '您删除了用户：' + username
          this.init()
        })
      }
    },
    components: {
      alert: alert
    }
  }
</script>

<style lang="scss">
  
</style>
