export const baseURL = process.env.NODE_ENV === 'production'
  ? '生产环境调用的实际接口地址'
  : 'http://localhost:3000'
