<template>
  <div id="landingpage">
    <h1>{{ msg }}</h1>
    <NavigationButton path="/login" buttonText="Log In"/>
    <NavigationButton path="/register" buttonText="Register" />
  </div>
</template>

<script>
import NavigationButton from './NavigationButton'
export default {
  name: 'LandingPage',
  props: {
    msg: String
  },
  components: {
    NavigationButton
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
