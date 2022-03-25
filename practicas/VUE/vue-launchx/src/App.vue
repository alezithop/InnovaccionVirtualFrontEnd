<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>Hola Vueplorers</h1>
  <HelloWorld msg="Bienvenido to Your Vue.js App"/>
</template>

<script>
/* todo el código de Vue */
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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

.titulo {
  font-size: 50px;
}
</style>
