const state = {
  userName: '3zz'
}
const mutations = {
  //
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
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
