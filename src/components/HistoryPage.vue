<template>
  <div>
      <Navbar />
      <b-row class="top-buffer">
        <b-col>
            <h1>All User History</h1>
        </b-col>
    </b-row>
    <b-row>
        <b-col>
            <b-icon icon="arrow-clockwise" @click="refresh" id="refresh"></b-icon>
        </b-col>
    </b-row>
    <b-row>
        <b-col id="table">
            <b-table striped hover :items="items" :per-page="perPage" :current-page="currentPage" id="my-table"></b-table>
        </b-col>
    </b-row>
    <b-row id="bottom-bar">
        <b-col>
            <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                pills
                align="center"
            >
            <template v-slot:first-text><span class="text-success">First</span></template>
            <template v-slot:prev-text><span class="text-danger">Prev</span></template>
            <template v-slot:next-text><span class="text-warning">Next</span></template>
            <template v-slot:last-text><span class="text-info">Last</span></template>
            </b-pagination>
        </b-col>
    </b-row>
  </div>
</template>

<script>
import moment from 'moment';
import Navbar from './Navbar';
export default {
    name: 'HistoryPage',
    data: function () {
        return {
            items: [],
            currentPage: 1,
            perPage: 10
        }
    },
    components: {
        Navbar
    },
    methods: {
        getStatusHistory: function () {
            const token = localStorage.getItem("token");
            const config = {
                headers: {"Authorization": `Bearer ${token}`}
            }
            const baseURI = `http://localhost:3000/history`;
            this.$http.get(baseURI, config)
            .then(data => {
                this.items = data.data.events.map(event => ({
                    user: event.username,
                    first_name: event.first_name,
                    last_name: event.last_name,
                    action: event.event_type,
                    timestamp: moment(event.created_at).format("dddd, MMMM Do YYYY, h:mm:ss a")
                }));
                return this.items;
            })
        },
        refresh: function () {
            this.$router.go();
        }
    },
    computed: {
        rows() {
            return this.items.length
        }
    },
    mounted: function () {
        this.getStatusHistory();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
    width: 100vw;
}
button {
  width: 20vw;
}
.top-buffer {
  margin-top: 15vh;
}
#bottom-bar {
    margin-top: 3vh;
    text-align: center;
}
#table {
    margin-right: 5vw;
    margin-left: 5vw;
}
#refresh {
    margin-top: 2vh;
    margin-bottom: 2vh;
    font-size: 30pt;
}
#refresh:hover {
    cursor: pointer;
}
</style>
