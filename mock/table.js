import Mock from 'mockjs'

const data = Mock.mock({
  'items|10-20': [{
    id: '@id',
    'status|1': ['success', 'warning', 'danger'],
    name: '@csentence(8, 15)',
    expiryDate: '@datetime',
    days: '@integer(1, 30)',
    count: '@integer(300, 5000)',
    sended: '@integer(50, 500)',
    actived: '@integer(20, 90)'
  }]
})
const detailData = Mock.mock({
  'items|10-20': [{
    id: '@id',
    expiryDate: '@datetime',
    'status|1': ['success', 'warning', 'danger'],
    activeDate: '@datetime',
    createDate: '@datetime',
    account: '@name'
  }]
})

export default [
  {
    url: '/table/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/table/detail/list',
    type: 'get',
    response: config => {
      const items = detailData.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
