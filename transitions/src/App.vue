<template>
      <div class="content">
        <router-link to="/">Home</router-link>
        <router-link to="/transiciones-vue">Transiciones</router-link>
        <router-view />
        <dynamic-components-vue/>
    </div>
</template>

<script>
/* eslint-disable */
import Home from './layouts/Home.vue'
import DynamicComponentsVue from './components/DynamicComponents.vue'

export default {
  name: 'App',
  components: {
    Home,
    DynamicComponentsVue

  },
  data(){
    return {
      show: false,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.content{
  width: 40%;
  min-width: 500px;
  margin: 0 auto;
  position: relative;
}

a{
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin-right: 1em;
}
a:hover,
a.router-link-active{
  border-bottom: 2px solid #3498db;
}

</style>
