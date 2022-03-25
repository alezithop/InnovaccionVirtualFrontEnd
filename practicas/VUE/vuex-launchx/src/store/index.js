import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0,
  },
  getters: {
    // consultar un estado para no consumir el estado
    cuadrado(state) {
      return state.counter * state.counter;
    }
  },
  // Para todas las cosas que sean de mutaciones usaremos 'commit'en nuestras Views
  mutations: {
    // si queremos modificar el estado, variables, etc. No permite codigo asynchrono. NO consumir APIs
    // usualmente se usan aqui mismo, la buena practica es que la accion llame a una mutacion y que la mutacion modifique el estado.
    subirContador(state, random) {
      state.counter += random;
    },
    bajarContador(state, random) {
      state.counter -= random;
    }
  },
  // Para todas las cosas que sean de acciones vamos a usar 'dispatch' en nuestras Views
  actions: { 
    // parecido a las mutaciones pero aqui si permite codigo asyncrono, ejemplo consumir APIs
    // es buena practica mandar llamar a las acciones desde los componentes.
    async subirContador( { commit }) {
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new');
      const results = await res.json();
      console.log(results)
      commit("subirContador", results)
    },

    async bajarContador( { commit }) {
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new');
      const results = await res.json();
      console.log(results)
      commit("bajarContador", results)
    }
  },
  modules: {
    // Ejemplo: modulo de perfil que ejecuta ciertas acciones
  }
})
