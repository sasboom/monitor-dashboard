<template>
  <div id="registerpage">
    <h1>Register</h1>
    <div id="registerform">
      <b-form @submit="submit">
        <b-row>
          <b-col>
            <b-form-group
              id="input-group-1"
              label="First Name"
              label-for="firstname"
              description=""
            >
              <b-form-input
                id="firstname"
                v-model="firstname"
                type="text"
                required
                placeholder="Please enter your first name"
              >
              </b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group
              id="input-group-2"
              label="Last Name"
              label-for="lastname"
              description=""
            >
              <b-form-input
                id="lastname"
                v-model="lastname"
                type="text"
                required
                placeholder="Please enter your last name"
              >
              </b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group
              id="input-group-3"
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
              id="input-group-4"
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
</template>

<script>
export default {
  name: 'RegisterPage',
  data: function () {
    return {
        username: '',
        password: '',
        firstname: '',
        lastname: ''
    }
  },
  methods: {
      submit: function (e) {
        e.preventDefault();
        const baseURI = 'http://localhost:3000/register';
        this.$http.post(baseURI, {username: this.username, password: this.password, firstname: this.firstname, lastname: this.lastname})
        .then(() => {
          localStorage.clear();
          this.$router.push({ path: '/login' });
        })
        .catch(() => {
          alert("Error occurred during registration. Double check all information provided");
        })
      }
  },
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
  font-family: 'BioRhyme', serif;
}
#registerform {
  margin-top: 10vh;
  margin-left: 20vw;
  margin-right: 20vw;
}
</style>
