// components/counter/index.js
import {Cart} from "../models/cart";

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        count: {
            type: Number,
            value: Cart.SKU_MIN_COUNT
        },

        max: {
            type: Number,
            value: Cart.SKU_MAX_COUNT
        },

        min: {
            type: Number,
            value: Cart.SKU_MIN_COUNT
        }
    },

    /**
     * 组件的初始数据
     */
    data: {},

    /**
     * 组件的方法列表
     */
    methods: {
        onOverStep(e) {
            const type = e.detail.type
            if (type == "overflow_max") {
                wx.showToast({
                    title: "超出最大购买数量",
                    duration: 3000,
                    icon: "none"
                })
            }
            if (type == "overflow_min") {
                wx.showToast({
                    title: `最少需购买${this.properties.min}件`,
                    duration: 3000,
                    icon: "none"
                })
            }

        }
    }
})
