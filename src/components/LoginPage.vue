<template>
  <transition name="fade" mode="out-in">
    <div>
      <h1>Login</h1>
      <div id="form">
        <b-form @submit="submit">
          <b-row>
            <b-col>
              <b-form-group
                id="input-group-1"
                label="Username"
                label-for="username"
                description=""
              >
                <b-form-input
                  id="username"
                  v-model="username"
                  type="text"
                  required
                  placeholder="Please enter a username"
                >
                </b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group
                id="input-group-2"
                label="Password"
                label-for="password"
                description=""
              >
                <b-form-input
                  id="password"
                  v-model="password"
                  type="password"
                  required
                  placeholder="Please enter a password"
                >
                </b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-button type="submit" variant="dark">Submit</b-button>
        </b-form>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'LoginPage',
  data: function () {
    return {
        username: '',
        password: '',
        authenticated: false
    }
  },
  methods: {
      submit: function (e) {
        e.preventDefault()
        const baseURI = 'https://checkin-server.herokuapp.com/login';
        this.$http.post(baseURI, {username: this.username, password: this.password})
        .then(response => {
          localStorage.clear();
          localStorage.setItem('token', response.data.token);
          this.authenticated = true;
          this.$router.push({ path: '/status' });
        })
        .catch(() => {
          alert("Invalid user credentials");
        })
      }
  },
  mounted: function () {
    const token = localStorage.getItem('token');
    if (token) {
      this.authenticated = true;
      this.$router.push({path: '/status'});
    } else {
      this.authenticated = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-family: 'BioRhyme', serif;
  padding-top: 2vh;
}
#form {
  margin-top: 10vh;
  margin-left: 20vw;
  margin-right: 20vw;
}
</style>
