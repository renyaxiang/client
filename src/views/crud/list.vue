<template>
  <div>
    <router-link :to="{name: 'crudCreate'}">
      <button class="btn btn-default">新增</button>
    </router-link>
    <alert v-if="alert" :msg="alert"></alert>
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
          <td>{{item.create_time | time}}</td>
          <td>{{item.role}}</td>
          <td>
            <router-link :to="{name: 'crudDetail', params: {id: item._id}}">
              <button class="btn btn-default btn-sm">查看</button>
            </router-link>
            <router-link :to="{name: 'crudUpdate', params: {id: item._id}}"><button class="btn btn-default btn-sm">编辑</button></router-link>
            <button class="btn btn-default btn-sm btn-danger" @click="del(item._id, item.name)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import axios from 'axios'
  import alert from '../../components/alert'
  var instance = axios.create({
    baseURL: 'http://127.0.0.1:3000/api/'
  })
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
      },
      del(id, username) {
        instance.delete('users/' + id).then((res) => {
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
