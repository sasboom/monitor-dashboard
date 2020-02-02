<template>
  <b-jumbotron bg-variant="light" text-variant="dark" id="jumbo">
      <template v-slot:header><h1>Check-In/Out System</h1></template>
      <hr class="my-4" id="line">
      <p>
        To begin please login or register an account.
      </p>
      <b-row class="top-buffer">
        <b-col>
          <NavigationButton path="/login" buttonText="Log In"/>
        </b-col>
      </b-row>
      <b-row class="top-buffer">
        <b-col>
          <NavigationButton path="/register" buttonText="Register" />
        </b-col>
      </b-row>
    </b-jumbotron>
</template>

<script>
import NavigationButton from './NavigationButton'
export default {
  name: 'LandingPage',
  components: {
    NavigationButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#jumbo{
  height: 100vh;
}
#line {
  background-color: black;
}
.top-buffer {
  margin-top: 10vh;
}
h1 {
  color: black;
  font-size: 50pt;
  text-align: center;
  font-family: 'BioRhyme', serif;
}
p {
  margin-top: 10vh;
  font-family: 'BioRhyme', serif;
}
</style>
