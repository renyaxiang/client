<template>
  <nav>
    <div class="page-header">
      <h1 class="text-center">template</h1>
    </div>
    <ul class="list-group">
      <li class="list-group-item">
        <router-link to="/signup">signup</router-link>
      </li>
      <li class="list-group-item">
        <router-link to="/login">login</router-link>
      </li>
      <li class="list-group-item">
        <router-link to="/" @click.native="logout" >logout</router-link>
      </li>
       <li class="list-group-item">
        <router-link to="/authorization">authorization</router-link>
      </li>
      <li class="list-group-item">
        <router-link to="/infiniteScroll">infinite-scroll</router-link>
      </li>
      <li class="list-group-item">
        <router-link to="/pagination">pagination</router-link>
      </li>
      <li class="list-group-item">
        <router-link to="/debounce">debounce</router-link>
      </li>
      <li class="list-group-item">
        <router-link to="/crud/create">validation</router-link>
      </li>
      <li class="list-group-item">
        <router-link to="/crud">crud</router-link>
      </li>
    </ul>
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
