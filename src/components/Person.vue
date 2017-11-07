<template>
  <div class="col-sm-6 col-sm-offset-3">
    <h1>私人文件</h1>
    <button class="btn btn-primary" @click="getmsg()">Get File</button>
    <div class="msg-area" v-if="msg" v-html="msg">
      <h2>{{ msg }}</h2>
    </div>
  </div>
</template>
<script>
  import auth from '../auth/auth'
  export default {
    data() {
      return {
        msg: ''
      }
    },
    methods: {
      getmsg() {
          this.msg=localStorage.getItem('data')
      }
    }
  }
</script>
<style>
  table {
    text-align:center;
    font-size: 16px;
    line-height: 2em;
    border-style:solid;
    width:100%;
    margin: 10px 0;
  }
  table td{
    border:1px solid #cccccc;
  }
</style>
