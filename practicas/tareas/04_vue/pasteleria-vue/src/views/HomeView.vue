<template>
  <div class="home">
    <img src="../assets/holaDeliciososSlogan.png" alt="Hola Deliciosos">
    <h1>Bienvenido a Hola Deliciosos</h1>
    <MenuPasteles/>
    <AdornosPasteles/>
    <PaquetesPasteles/>
    
    <router-link to="/FormularioPedido">
        <button>Realiza tu pedido</button>
        </router-link>
    <hr>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import MenuPasteles from "@/components/MenuPasteles.vue";
import AdornosPasteles from "@/components/AdornosPasteles.vue";
import PaquetesPasteles from "@/components/PaquetesPasteles";
import FormularioPedido from "@/components/FormularioPedido";
import Footer from "@/components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    MenuPasteles,
    AdornosPasteles,
    PaquetesPasteles,
    FormularioPedido,
    Footer,
  },
};
</script>
