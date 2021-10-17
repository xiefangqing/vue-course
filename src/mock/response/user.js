import Mock from 'mockjs'

const Random = Mock.Random

export const getUserInfo = options => {
  const template = {
    'str|2-4': 'xie',
    'name|5': 'ha',
    'age|+2': 18,
    'num|4-10': 0,
    'float|3-10.2-4': 0,
    'bool|1': true,
    'bool2|1-9': true, // min/(min+max)
    'obj|2': {
      a: 'aa',
      b: 'bb',
      c: 'cc'
    },
    'obj2|1-2': {
      a: 'aa',
      b: 'bb',
      c: 'cc'
    },
    'arr|2-4': [1, 2, 3],
    'arr2|3': ['a', 'b'],
    func: () => {
      return 'good good fuck fuck'
    },
    reg: /[1-9][a-z]/,
    email: Random.email(),
    email2: Mock.mock('@email'),
    range: Random.range(3, 10, 2),
    data: Random.date('yyyy-MM-dd'),
    time: Random.time('hh:mm'),
    datetime: Random.datetime('yyyy-MM-dd hh:mm'),
    now: Random.now('hour', 'yyyy-MM-dd hh:mm'),
    img: Random.image('300x200', '#ccc', '#f00', 'png', 'diaomao'),
    img_base64: Random.dataImage(),
    color: Random.color(),
    cword: Random.cword('你好我草', 2, 5),
    cname: Random.cname(),
    email3: Random.email('xie.com'),
    region: Random.region(),
    province: Random.province(),
    city: Random.city(true),
    county: Random.county(true),
    zip: Random.zip()
  }
  // let i = 3
  // let arr = []
  // while (i--) {
  //   arr.push(template)
  // }
  return Mock.mock(template)
}
