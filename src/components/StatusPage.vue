<template>
  <div id="statuspage">
    <b-row class="top-buffer">
      <b-col>
      <h1>Status Page</h1>
      </b-col>
    </b-row>
    <b-row class="top-buffer">
      <b-col>
        <b-button variant="outline-dark" @click=checkin>Check In</b-button>
      </b-col>
    </b-row>
    <b-row class="top-buffer">
      <b-col>
        <b-button variant="outline-dark" @click=checkout>Check Out</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-modal v-model="showCheckinSuccess" body-text-variant="success" title="Success" centered hide-footer>
          <div class="d-block text-center">
            <h3>You have checked in successfully!</h3>
          </div>
        </b-modal>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-modal v-model="showCheckoutSuccess" body-text-variant="success" title="Success" centered  hide-footer>
          <div class="d-block text-center">
            <h3>You have checked out successfully!</h3>
          </div>
        </b-modal>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-modal v-model="showCheckinError" body-text-variant="danger" title="Error" centered  hide-footer>
          <div class="d-block text-center">
            <h3>Sorry, you have to check out first.</h3>
          </div>
        </b-modal>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-modal v-model="showCheckoutError" body-text-variant="danger" title="Error" centered  hide-footer>
          <div class="d-block text-center">
            <h3>Sorry, you have to check in first.</h3>
          </div>
        </b-modal>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'StatusPage',
  data: function () {
    return {
      showCheckinSuccess: false,
      showCheckoutSuccess: false,
      showCheckinError: false,
      showCheckoutError: false
    }
  },
  methods: {
    hideCheckInModal: function () {
      this.$refs['checkedin'].hide()
    },
    checkin: function () {
      const token = localStorage.getItem("token");
      const config = {
          headers: {"Authorization": `Bearer ${token}`}
      }
      const baseURI = 'https://checkin-server.herokuapp.com/statuses';
      this.$http.post(baseURI, {type: 'USER_CHECKED_IN'}, config)
      .then(() => {
        this.showCheckinSuccess = true;
        this.showCheckinError = false;
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err);
        this.showCheckinSuccess = false;
        this.showCheckinError = true;
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
        this.showCheckoutSuccess = true;
        this.showCheckoutError = false;
      })
      .catch(() => {
         this.showCheckoutSuccess = false;
        this.showCheckoutError = true;
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  width: 20vw;
}
.top-buffer {
  margin-top: 10vh;
}

</style>
