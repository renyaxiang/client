<template>
  <div>
    <div class="page-header">
      <h1 class="text-center">用户认证</h1>
    </div>
    <code style="word-wrap: break-word">{{token}}</code>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        token: ''
      }
    },
    mounted() {
      this.token = localStorage.getItem('token')
    }
  }
</script>
