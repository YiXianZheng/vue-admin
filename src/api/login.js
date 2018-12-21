import request from './request';
import request1 from '@/utils/request';
import config from './config';
const { api } = config;
const { userLogin } = api;

export function loginByUsername(data) {
  return request(userLogin, {
    data,
    method: 'POST'
  })
}

// export function loginByUsername(data) {
//   return request({
//     url: userLogin,
//     method: 'post',
//     params: userLogin
//   })
// }

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}
 
export function getUserInfo(token) {
  return request1({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

