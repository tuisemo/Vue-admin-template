import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/table/list',
    method: 'get',
    params
  })
}

export function getDetailList(params) {
  return request({
    url: '/table/detail/list',
    method: 'get',
    params
  })
}
