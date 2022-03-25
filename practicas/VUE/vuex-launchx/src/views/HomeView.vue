<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <Contador/>

    <Cuadrado/>

    <Botones/>
    <!-- <div class="buttons"> -->
      <!-- Para todas las cosas que sean de mutaciones usaremos 'commit' -->
      <!-- <button @click="$store.commit('bajarContador')">-</button> -->
      <!-- <button @click="$store.commit('subirContador')">+</button> -->
      <!-- Para todas las cosas que sean de acciones vamos a usar 'dispatch' -->
    <!-- </div> -->

  </div>

</template>

<script>
import Contador from "../components/Contador.vue";
import Cuadrado from "../components/Cuadrado.vue";
import Botones from "../components/Botones.vue";

export default {
  name: 'HomeView',
  components: {
    Contador,
    Cuadrado,
    Botones,
  }
  // data() { // lo quitamos porque ya lo tenemos en el estado
  //   return {
  //     counter: 0
  //   }
  // },
  // methods: { // lo quitamos porque ya lo tenemos en las mutaciones
  //   bajarContador() {
  //     this.counter--;
  //   },
  //   subirContador() {
  //     this.counter++;
  //   }
  // }
}
</script>

<style>
div {
  margin-bottom: 10px;
}

.counter {
  font-size: 80px;
}

.buttons button {
  font-size: 40px;
  width: 100px;
  margin: 0 10px
}

.cuadrado {
  font-size: 25px;
}
</style>