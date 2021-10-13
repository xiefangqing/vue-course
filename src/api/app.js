export const getAppName = () => {
  return new Promise((resolve, reject) => {
    // 抛硬币模拟异步操作
    setTimeout(() => {
      if (Math.random() < 0.5) resolve({ code: 200, info: { appName: 'newAppName' } })
      // 传入reject的参数应该是一个错误类的实例（比如Error、TypeError）
      else reject(new Error('失败原因'))
    }, 500)
  })
}
