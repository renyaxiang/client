<template>
  <div  v-show="show" class="text-center text-muted">正在加载中...</div>
</template>

<script>
  export default {
    props: ['show']
  }
</script>
