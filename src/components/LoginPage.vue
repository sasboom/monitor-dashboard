<template>
  <div id="loginpage">
    <h1>Login</h1>
    <div>
        <h1>Username</h1>
        <input type="text" v-model="username" />
        <h1>Password</h1>
        <input type="password" v-model="password" />

        <div id="submit">
          <input id="submitBtn" type="submit" value="Submit" v-on:click="submit" />
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data: function () {
    return {
        username: '',
        password: ''
    }
  },
  methods: {
      submit: function () {
        const baseURI = 'https://checkin-server.herokuapp.com/login';
        this.$http.post(baseURI, {username: this.username, password: this.password})
        .then(response => {
          localStorage.setItem('token', response.data.token);
          this.$router.push({ path: '/status' });
        })
      }
  },
  mounted: function () {
    const tokenExists = localStorage.getItem('token');
    if (tokenExists) {
      localStorage.removeItem('token');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#submit {
  display: block;
  padding-top: 5vh;
}
#submitBtn {
  text-align: center;
}
h1 {
  padding-top: 2vh;
}
#landingpage {
  background: #141E30;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #243B55, #141E30);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #243B55, #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: 100vh;
}
</style>
