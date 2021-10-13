import { getAppName } from '@/api/app'
const actions = {
  // updateAppName ({ commit }) {
  //   getAppName().then(res => {
  //     // commit('SET_APP_NAME', res.info.appName)
  //     const { info: { appName } } = res
  //     commit('SET_APP_NAME', appName)
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }

  // es8 async函数
  async updateAppName ({ commit }) {
    try {
      const { info: { appName } } = await getAppName()
      commit('SET_APP_NAME', appName)
    } catch (err) {
      console.log(err)
    }
  }
}
export default actions
