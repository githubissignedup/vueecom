import { createStore } from 'vuex'

export default createStore({
  state: {
    cartItems:0,
    cartCount:0
  },
  getters: {
  },
  mutations: {
    
    addToCart(state, id) {
      console.log("id",id)
      state.cartItems=id;
  }
  },
  actions: {
    addToCart(state, id) {
      console.log(id);
  }
  },
  modules: {
  }
})
