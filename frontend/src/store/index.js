import { createStore } from 'vuex'
import axios from 'axios'
const miniURL = ''

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    spinner: null,
    token: null,
    msg: null
  },
  getters: {
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    },
    setUser(state, user) {
      state.user = user
    },
    setProducts(state, products) {
      state.products = products
    },
    setProduct(state, product) {
      state.product = product
    },
    setSpinner(state, spinner) {
      state.spinner = value
    },
    setToken(state, token) {
      state.token = token
    },
    setMsg(state, msg) {
      state.msg = msg
    }
  },
  actions: {
    async fetchUsers (context) {
      try {
        const {data} = await axios.get(`${miniURL}users`)
        context.commit("setUsers", data.results)
      } catch (e) {
        context.commit("setMsg", "an error occured")
      }
    },
    async fetchUser (context) {
      try {
        const {data} = await axios.get(`${miniURL}user`)
        context.commit("setUser", data.results)
      } catch (e) {
        context.commit("setMsg", "an error occured")
      }
    },
    async fetchProducts (context) {
      try {
        const {data} = await axios.get(`${miniURL}products`)
        context.commit("setProducts", data.results)
      } catch (e) {
        context.commit("setMsg", "an error occured")
      }
    },
    async fetchProduct (context) {
      try {
        const {data} = await axios.get(`${miniURL}product`)
        context.commit("setProduct", data.results)
      } catch (e) {
        context.commit("setMsg", "an error occured")
      }
    },
  },
  modules: {
  }
})
