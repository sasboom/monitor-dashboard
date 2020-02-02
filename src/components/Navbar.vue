<template>
  <div>
      <b-navbar type="dark" variant="dark" sticky>
        <b-navbar-brand href="#/">Are You Here Yet?</b-navbar-brand>
        <b-navbar-nav>
        <b-nav-item href="#/login">Login</b-nav-item>
        <b-nav-item href="#/Register">Register</b-nav-item>
        <b-nav-item href="#/status">Update Status</b-nav-item>
        <b-nav-item href="#/history">History</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
