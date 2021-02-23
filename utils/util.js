/*
 * @Description: 常用工具封装
 * @Author: Jamboy
 * @Date: 2021-02-01 11:58:53
 * @LastEditTime: 2021-02-22 17:00:08
 */
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

/**
 * @description: 将方法包装返回promise，wx内置api
 * @param {*} func wx.request，仅传调用方法名
 * @return {*}
 */
const promisic = function (func) {
  return function (params = {}) {
    return new Promise((resolve, reject) => {
      const args = Object.assign(params, {
        success: (res) => {
          resolve(res);
        },
        fail: (error) => {
          reject(error);
        }
      });
      func(args);
    });
  };
};

export {
  promisic
  // formatTime
}
