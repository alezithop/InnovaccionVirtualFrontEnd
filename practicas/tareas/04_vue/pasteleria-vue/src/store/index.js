import { createStore } from 'vuex'

export default createStore({
  state: {
    sabor_tresleches: 40,
    sabor_tiramisu: 50,
    sabor_elote: 50,
    sabor_selvanegra: 50,
    sabor_cheesecake: 5,
    sabor_zanahoria: 50,
    sabor_frutas: 3,
    sabor_naranja: 3,
    sabor_vainilla: 3,
    sabor_chocolate: 3,
    adorno_velascumple: 14,
    adorno_cerpentinas: 13,
    adorno_fondant: 20,
    adorno_plastico: 14,
    // pedidos: [
    //   { 'nombre': '' },
    //   { 'telefono': '' },
    //   { 'correo': '' },
    //   { 'notas': '' },
    //   { 'sabores': '' },
    //   { 'velas': '' },
    //   { 'cerpentinas': '' },
    //   { 'fondant': '' },
    //   { 'figurasplastico': '' },
    // ]
  },
  getters: {
    obtener_registros() {
      return state;
    }
  },
  mutations: {
    actualizar_registros(state, sabor_tresleches, sabor_tiramisu, sabor_elote, sabor_selvanegra, sabor_cheesecake, sabor_zanahoria, sabor_frutas, sabor_naranja, sabor_vainilla, sabor_chocolate, adorno_velascumple, adorno_cerpentinas, adorno_fondant, adorno_plastico) {
      state.sabor_tresleches = sabor_tresleches;
      state.sabor_tiramisu = sabor_tiramisu;
      state.sabor_elote = sabor_elote;
      state.sabor_selvanegra = sabor_selvanegra;
      state.sabor_cheesecake = sabor_cheesecake;
      state.sabor_zanahoria = sabor_zanahoria;
      state.sabor_frutas = sabor_frutas;
      state.sabor_naranja = sabor_naranja;
      state.sabor_vainilla = sabor_vainilla;
      state.sabor_chocolate = sabor_chocolate;
      state.adorno_velascumple = adorno_velascumple;
      state.adorno_cerpentinas = adorno_cerpentinas;
      state.adorno_fondant = adorno_fondant;
      state.adorno_plastico = adorno_plastico;
    }
  },
  actions: {
  },
  modules: {
  }
})
