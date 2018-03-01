import * as types from '../mutation-types'
import axios from 'axios'
const state = {
  identity: {}
}

const getters = {
  isGuest (state) {
    return !state.identity.username
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
        commit(types.UPDATE_USER_IDENTITY, data.data)
      })
  },
  userRegister ({commit, getters, state, dispatch}, param) {
    return axios.post('/register', param)
      .then(({data}) => {
        if (data.code === 'ok') {
          let para = {
            username: param.username,
            password: param.password
          }
          return dispatch('userLogin', para)
        }
      })
  },
  loginViaGit ({commit, getters, state}) {
    return axios.get('/auth/github')
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
