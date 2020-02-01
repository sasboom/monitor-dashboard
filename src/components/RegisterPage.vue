<template>
  <div id="registerpage">
    <h1>Register</h1>
    <div>
        <h1>Username</h1>
        <input type="text" v-model="username" />
        <h1>Password</h1>
        <input type="password" v-model="password" />
        <h1>Submit</h1>
        <input type="submit" value="Submit" v-on:click="submit" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  data: function () {
    return {
        username: '',
        password: ''
    }
  },
  methods: {
      submit: function () {
          // eslint-disable-next-line no-console
          console.log(this.username);
          // eslint-disable-next-line no-console
          console.log(this.password);
          //TODO: Call register API
          return true;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#landingpage {
  background: #141E30;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #243B55, #141E30);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #243B55, #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: 100vh;
}
</style>
