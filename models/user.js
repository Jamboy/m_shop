/*
 * @Description: 
 * @Author: Jamboy
 * @Date: 2021-02-22 15:41:09
 * @LastEditTime: 2021-02-22 17:38:36
 */
import {
    Http
} from "../utils/http";
/**
 * 
 */
class User extends Http {
    // loginByAccount() {

    // }

    /**
     * @description: 测试本地url数据
     * @param {*}
     * @return {*}
     */
    static async testLocalApi() {
        return await Http.request({
            url: 'goods/count'
        })
    }
}

export {
    User
}