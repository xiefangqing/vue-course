export const baseURL = process.env.NODE_ENV === 'production'
  ? '生产环境调用的实际接口地址'
  : '开发环境调用的接口地址(如果设置了代理，就写空串)'
