<template>
  <div>
      <b-navbar type="dark" variant="light">
        <b-navbar-brand to="/"><h1>Are You Here Yet?</h1></b-navbar-brand>
        <b-navbar-nav float-right>
        <b-nav-item to="/status"><b-button variant="outline-dark">Update Status</b-button></b-nav-item>
        <b-nav-item to="/history"><b-button variant="outline-dark">History <b-badge variant="success">New</b-badge></b-button></b-nav-item>
        <b-nav-item @click="logout"><b-button variant="outline-danger"><b-icon icon="power"></b-icon> Logout</b-button></b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout: function () {
      localStorage.clear();
      this.$router.push('/login');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-family: 'BioRhyme', serif;
  color: black
}
</style>
