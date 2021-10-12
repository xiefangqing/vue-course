const state = {
  userName: 'xiaoxie'
}
const getters = {
  firstLetter: state => state.userName.slice(0, 1)
}
const mutations = {
  //
}
const actions = {
  //
}

export default {
  // 使用命令空间，模块会更加密闭，不受外界干扰
  // namespaced: true,
  state,
  getters,
  mutations,
  actions
}
