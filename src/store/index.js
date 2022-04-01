import Vuex from 'vuex'
//import Axios from 'axios'
import { store as products } from './../pages/products'


//export default createStore({
//  state: {
//    count: 0,
//    products: []
//  },
//  getters: {
//  },
//  mutations: {
//    increments(state) {
//      state.count++
//    },
//    addProducts(state, payload) {
//      state.products.push(payload)
//    }
//  },
//  actions: {
//    addProducts(context, payload) {
//      context.commit('addProducts', payload)
//    }
//  },
//  modules: {
//  }
//})

const categories = {
  state: {
    categories: []
  }
}
// const products = {
//   state: {
//     products: []
//   },

//   mutations: {
//     getProductsM(state, payload) {
//       state.products = payload
//     }
//   },

//   actions: {
//     getProducts({ commit }) {
//       Axios.get('http://localhost:8081/product').then(resp => {
//         console.log(resp.data)
//         commit('getProductsM', resp.data)
//       })

//     }
//   }
// }
const store = new Vuex.Store({
  modules: {
    categories,
    products
  }
})

export default store
