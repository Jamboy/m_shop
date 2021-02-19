// pages/index/login/login.js
import cropto from '../../utils/crypto.js'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        username: "",
        password: ""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 输入账号密码登录
     * @param {} e 
     */
    startLogin(e) {
        var username = e.detail.value.username;
        var password = e.detail.value.password;
        console.log(username, password)
        // 校验输入完善
        if (username.length == 0 || password.length == 0) {
            wx.showToast({
                title: '输入有误，请重新输入',
                icon: 'none',
                duration: 1000
            })
        } else {
            let url = "https://192.168.3.59:9777/admin/acl/login"
            username = cropto.encrypt(username);
            password = cropto.encrypt(cropto.md5(password));
            console.log(username, password)

            wx.request({
                url: url,
                data: {
                    username,
                    password
                },
                header: {
                    'content-type': 'application/json'
                },
                method: "POST",
                success: (result) => {
                    console.log(result)
                },
                fail: (res) => {},
                complete: (res) => {},
            })
        }
    },

    /**
     * 获取手机号登录
     * @param {*} e 
     */
    getPhoneNumber(e){
        console.log(e.detail.errMsg)
        console.log(e.detail.iv)
        console.log(e.detail.encryptedData)
    }
})