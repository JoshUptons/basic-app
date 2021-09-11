<template>
  <div id="app">
    <Header />
    <Breadcrumbs />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Breadcrumbs from './components/Breadcrumbs.vue'
export default {
  name: 'App',
  components: {
    Breadcrumbs,
    Header
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  width: 80%;
  display: block;
  float: left;
  margin-left: 10%;
  height: 700px;
}
.header {
    width: 100%;
    height: 50px;
    display: block;
    background: #11b8ff;
    text-align: left;
    padding: .2rem 11%;
}
.header h1 {
    color: white;
}
@media only screen and (max-width: 600px) {
  .container {
    width: 100%;
    margin: 0;
  }
  .header h1 {
    font-size: 1.5rem;
  }
  .header {
    padding: .5rem 11%;
  }
}
</style>
