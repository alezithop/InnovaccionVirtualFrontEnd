<template>
    <div class="buttons">
      <!-- Para todas las cosas que sean de mutaciones usaremos 'commit' -->
      <button @click="$store.dispatch('bajarContador')">-</button>
      <button @click="$store.dispatch('subirContador')">+</button>
      <!-- Para todas las cosas que sean de acciones vamos a usar 'dispatch' -->
    </div>
</template>

<script>
    export default{
        name: 'Botones'
    }
</script>