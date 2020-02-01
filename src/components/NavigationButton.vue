<template>
    <div id="nav-container">
        <router-link id='navlink' :to="{path: '/register'}"><h1>{{buttonText}}</h1></router-link>
    </div>
</template>

<script>
export default {
  name: 'NavigationButton',
  props: {
    path: String,
    buttonText: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nav-container {
    display: flex;
    height: 10vh;
    align-items: center;
    justify-content: center;
    vertical-align: center;
}
a {
    width: 50vw;
    height: 4vh;
    background: grey;
    border-radius: 99px;
}
h1 {
    vertical-align: center;
}
</style>
