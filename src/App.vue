<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <ul class="nav navbar-nav">
        <li><router-link to="/">Home</router-link></li>
        <li v-if="!user.authenticated"><router-link to="/login">Login</router-link></li>
        <li v-if="user.authenticated"><router-link to="/person">Person</router-link></li>
        <li v-if="user.authenticated" @click="logout()"><router-link to="/login" >Logout</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import auth from './auth/auth'
  export default {
    data() {
      return {
        user: auth.user
      }
    },
    methods: {
      logout() {
        auth.logout()
      }
    }
  }
</script>
