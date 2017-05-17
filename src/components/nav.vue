<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
        <a class="navbar-brand" href="#">Vue.js</a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <li class="active">
            <router-link to="/">首页</router-link>
          </li>
          <li>
            <router-link to="/component">组件</router-link>
          </li>
          <li>
            <router-link to="/case">案例</router-link>
          </li>
          <li>
            <router-link to="/about">关于</router-link>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><router-link to="/login">登录</router-link></li>
          <li><router-link to="/logout">退出</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    methods: {
      logout() {
        localStorage.removeItem('token')
        this.$router.push({
          path: '/login'
        })
      }
    }
  }
</script>
