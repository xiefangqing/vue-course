import Mock from 'mockjs'
import { getUserInfo } from './response/user'

Mock.setup({
  // timeout: '2000-3000'
  timeout: 0
})

Mock.mock(/\/getUserInfo/, 'post', getUserInfo)

const Random = Mock.Random

Random.extend({
  fruit () {
    const fruit = ['apple', 'peach', 'lemon']
    return this.pick(fruit)
  }
})

export default Mock
