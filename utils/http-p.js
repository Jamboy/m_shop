/*
 * @Description: 描述
 * @Author: Jamboy
 * @Date: 2021-02-22 09:49:29
 */
import { config } from '../config/config.js'

//网络请求基类封装

/**
 * 提示
 */
const tips = {
    1: '抱歉，出现错误',
    403: 'token失效，请重新登录'
}

class HTTP {
    
    request({ url, data = {}, method = 'GET' }) {
        return new Promise((resolve, reject) => {
            this._request(url, resolve, reject, data, method)
        })
    }

    //私有，默认参数
    _request(url, resolve, reject, data = {}, method = 'GET') {
        wx.request({
            // url: config.api_base_url + url, //拼接业务请求url
            url: `${config.api_base_url}${url}`, //拼接业务请求url
            method: method, //默认为get请求
            data: data, //默认为空
            header: {
                'content-type': 'application/json'
            },
            success: (res) => {
                //TODO 返回码判断 成功200
                const resCode = res.statusCode.toString()
                if (resCode.startWith('2')) {
                    resolve(res.data) //返回请求数据 promise
                } else {
                    reject() //promise 状态变更
                    const error_code = res.data.error_code //返回错误代码判断
                    this._show_error(error_code)
                }
            },
            fail: (err) => {
                reject()
                this._show_error(1) //TODO 完善错误码
            }
        })
    }

    /**
     * 错误提示Toast
     * @param {} error_code 错误码
     */
    _show_error(error_code) {
        if (!error_code) {
            error_code = 1 //默认错误返回码为1
        }
        const tip = tips[error_code]
        //弹提示窗
        wx.showToast({
            title: tip ? tip : tip[1],
            icon: 'none',
            duration: 2000
        })
    }
}

export {
    HTTP
}