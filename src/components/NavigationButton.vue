<template>
    <router-link id='navlink' :to="{path: path}"><b-button variant="outline-dark">{{buttonText}}</b-button></router-link>
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
a {
    width: 20vw;
}
button {
    font-family: 'BioRhyme', serif;
    width: 20vw;
}
</style>
