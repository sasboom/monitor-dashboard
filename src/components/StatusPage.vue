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
  data: function () {
    const token = localStorage.getItem("token");
    const config = {
        headers: {"Authorization": `Bearer ${token}`}
    }
    return {
      config
    }
  },
  methods: {
    checkin: function () {
        const baseURI = 'https://checkin-server.herokuapp.com/statuses';
        this.$http.post(baseURI, {type: 'checkin'}, this.config)
        .then(() => {
          alert("You have checked in");
          this.$router.go();
        })
    },
    checkout: function () {
      const baseURI = 'https://checkin-server.herokuapp.com/statuses';
      this.$http.post(baseURI, {type: 'checkout'}, this.config)
      .then(() => {
        alert("You have checked out");
        this.$router.go();
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
