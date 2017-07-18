'use strict'

import axios from 'axios'
import qs from 'qs'
import { Message, Loading } from 'element-ui'
import router from '../../router'

var loadinginstance;

axios.interceptors.request.use(config => {
  // loading
  loadinginstance = Loading.service({fullscreen: true});
  return config
}, error => {
  loadinginstance.close();
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  loadinginstance.close();
  return response
}, error => {
  loadinginstance.close();
  return Promise.resolve(error.response)
})

function checkStatus (response) {
  switch (response.status) {
    case 401: {
      router.push('/login');
      break;
    }
    case 403: {
      Message.error({
        message: '当前用户无此访问权限'
      });
      break;
    }
    case 500: {
      Message.error({
        message: '服务器内部错误' + response.data.message
      });
      break;
    }
    case 504: {
      Message.error({
        message: '网关连接超时' + response.data.message
      });
      break;
    }
  }
  return response;
}

function checkCode (res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status === -404) {
    Message.error({
      message: res.msg
    });
  }
  if (res.data && (!res.data.success)) {
    // Message.success({
    //   message: res.data.error_msg
    // });
  }
  return res
}

export default {
  post (url, data) {
    return axios({
      method: 'post',
      url,
      data: qs.stringify(data),
      timeout: 1000 * 60,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    )
  },
  get (url, params) {
    return axios({
      method: 'get',
      // baseURL: 'https://cnodejs.org/api/v1',
      url,
      params, // get 请求时带的参数
      timeout: 1000 * 60,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    )
  }
}