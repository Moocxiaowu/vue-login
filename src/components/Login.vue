<template>
    <div class="col-sm-4 col-sm-offset-4">
      <h1>Log In</h1>
      <p>Log in to your account</p>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Enter your username" v-model="user.Uname">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="Enter your password" v-model="user.Pword">
      </div>
      <button class="btn btn-primary" @click="submit()">Access</button>
    </div>
</template>
<script>
  import auth from '../auth/auth'

  export default {
    data() {
      return {
        user: {
          Uname: 'B67558',
          Pword: '123456'
        },
        error: ''
      }
    },
    methods: {

      submit: function () {
        var user = {
            username: this.user.Uname,
            password: this.user.Pword
        };
        auth.login(this,user,'Person')
        }
      }
    }
</script>
