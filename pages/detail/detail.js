/**
 * @filepath: pages\detail\detail.js
 * @author: Kivia
 * @date: 2021-03-01 15:40
 * @description：detail.js 展示商品详情
 */
import {SpuPaging} from "../../models/spu-paging";
import {SpuDetail} from "../../models/spu-detail";

// pages/detail/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        gallery: Array,
        desc: Object,
        spuSpecDataList: Object,
        spu: Object
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function (options) {
        const pid = options.pid
        console.log("-------------->商品详情页面加载 begin:----------->")
        console.log(pid)
        const spu = await this.getMockDetail(2)
        this.setData({
            spu,
            desc: {

            }
        })
        console.log("-------------->商品详情页面加载 end  :----------->")
    },

    /**
     * 加载商品详情信息
     * @param id
     */
    async initGoodsDetail(id) {
        const res = await SpuDetail.getSpuDetail(id)
        const gallery = res.gallery
        this.setData({
            gallery,
            desc: {
                name: res.info.name,
                goods_brief: res.info.goods_brief,
                retail_price: res.info.retail_price
            },
            spuSpecDataList: {
                specificationList: res.specificationList,
                typeList: res.productList

            }
        })
        console.log("-------------->开始打印商品详情 begin:----------->")
        console.log(this.data.spuSpecDataList)
        console.log(this.data.spuSpecDataList.productList)
        console.log("-------------->结束打印商品详情 end  :----------->")
    },

    /**
     * 获取mock detail
     */
    async getMockDetail(id) {
        const res = await SpuDetail.getMockSpu(id)
        console.log("-------------->开始加载Mock begin:----------->")
        console.log(res)
        console.log("-------------->结束加载Mock end  :----------->")
        return res
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})