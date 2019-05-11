const state = {
  userName: '3zz'
}
const mutations = {
  SET_USER_NAME (state, params) {
    state.userName = params
  }
}
const actions = {
  //
}
const getters = {
  firstLetter: (state) => {
    return state.userName.substr(0, 1)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
