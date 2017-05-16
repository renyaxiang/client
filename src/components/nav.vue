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
          <li class="active"><a href="/">首页</a></li>
          <li><a href="/component">组件</a></li>
          <li><a href="/case">案例</a></li>
          <li><a href="/about">关于</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="/login">登录</a></li>
          <li><a href="/logout">退出</a></li>
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
