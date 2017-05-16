<template>
  <div>
    <nav-header>
    </nav-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import navHeader from './components/nav.vue'
  import alert from './components/alert.vue'
  export default {
    data() {
      return {
        alert: ''
      }
    },
    components: {
      navHeader,
      alert
    }
  }
</script>

<style lang="scss">
  .alert {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 999;
    &.alert-show {
      animation: show 2s;
    }
    @keyframes show {
      0% {
        transform: translateY(-100%);
      }
      20% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(0);
      }
      80% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-100%);
      }
    }
  }
</style>
