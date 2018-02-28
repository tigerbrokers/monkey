import * as types from '../mutation-types'
import axios from 'axios'
const state = {
  identity: {}
}

const getters = {
  isGuest (state) {
    return state.identity.userName
  }
}

const mutations = {
  [types.UPDATE_USER_IDENTITY] (state, data) {
    state.identity = data
  }
}
const actions = {
  userLogin ({commit, getters, state}, param) {
    return axios.post('/login', param)
      .then(({data}) => {
        console.log(data)
        commit(types.UPDATE_USER_IDENTITY, data)
      })
  },
  userRegister ({commit, getters, state}, param) {
    return axios.post('/register', param)
      .then(({data}) => {
        console.log(data)
        commit(types.UPDATE_USER_IDENTITY, data)
      })
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
