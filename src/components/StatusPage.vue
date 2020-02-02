<template>
  <div id="statuspage">
    <h1>Status Page</h1>
    <button @click=checkin>Check In</button>
    <button @click=checkout>Check Out</button>
  </div>
</template>

<script>
export default {
  name: 'StatusPage',
  methods: {
    checkin: function () {
      const token = localStorage.getItem("token");
      const config = {
          headers: {"Authorization": `Bearer ${token}`}
      }
      const baseURI = 'https://checkin-server.herokuapp.com/statuses';
      this.$http.post(baseURI, {type: 'USER_CHECKED_IN'}, config)
      .then(() => {
        alert("You have checked in");
      })
      .catch(err => {
        alert(err.response.data);
      })
    },
    checkout: function () {
      const token = localStorage.getItem("token");
      const config = {
          headers: {"Authorization": `Bearer ${token}`}
      }
      const baseURI = 'https://checkin-server.herokuapp.com/statuses';
      this.$http.post(baseURI, {type: 'USER_CHECKED_OUT'}, config)
      .then(() => {
        alert("You have checked out");
      })
      .catch(err => {
        alert(err.response.data);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
