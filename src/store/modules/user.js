const state = {
  userName: 'xiaoxie'
}
const getters = {
  firstLetter: state => state.userName.slice(0, 1)
}
const mutations = {
  SET_USER_NAME (state, params) {
    state.userName = params
  }
}
const actions = {
  updateUserName ({ commit, state, rootState, dispatch }) {
    // rootState.appName
    dispatch('xxx', '')
  },
  xxx () {
    //
  }
}

export default {
  // 使用命令空间，模块会更加密闭，不受外界干扰
  // namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules: {
    //
  }
}
