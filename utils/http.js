import {
    config
} from '../config/config.js'
import {
    promisic
} from './util.js';

class Http {
    static async request({ //用对象解构
        url,
        data = {},
        method = 'GET' //默认GET请求
    }) {
        return await promisic(wx.request)({
            url: `${config.LocalShopUrl}${url}`,
            data,
            method,
            header: {
                'content-type': 'application/json'
            }
        });
    }
}

export {
    Http
}