import HttpRequest from '@/axios/api.request'

export const queryAction = () => {
  return HttpRequest.request({
    url: '/test',
    method: 'get'
  })
}

// export const UserAddAction = (parameter) => {
//   return HttpRequest.request({
//     url: 'user/',
//     method: 'post',
//     params: parameter
//   })
// }


