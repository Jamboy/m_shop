// components/realm/index.js
import {FenceGroup} from "../models/fence-group";
import {Judger} from "../models/judger";

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        spu: Object
    },

    observers: {
        'spu,fenceGroup': async function (spu) {
            if (!spu) {
                return
            }
            const fenceGroup = new FenceGroup(spu) //处理数据
            this.data.fenceGroup = fenceGroup
            fenceGroup.initFences()
            const judger = new Judger(fenceGroup)
            const res = await judger._initCellStatus()
            this.data.judger = judger
            this.bindInitData(judger.fenceGroup)
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        judger: Object,
        fenceGroup: Object

    },

    /**
     * 组件的方法列表
     */
    methods: {
        /**
         * 初始化组件数据
         * @param fenceGroup
         */
        bindInitData(fenceGroup) {
            this.setData({
                fences: fenceGroup.fences
            })
        },


        /**
         * @param e
         */
        onCellTap(e) {
            const detail = e.detail
            const cell = detail.cell
            const x = detail.x
            const y = detail.y
            const fenceKey = e.currentTarget.dataset.keyId
            console.log(e)
            console.log(fenceKey)
            console.log(detail.cell)
            console.log(detail.x)
            console.log(detail.y)
            const judger = this.data.judger
            judger.judge(cell, x, y) // 切换cell状态
            this.setData({
                fences: judger.fenceGroup.fences
            })
        },


        /**
         * 规格值点击
         * @param e
         */
        async onCellTapBykey(e) {
            console.log("-------------->获取规格 begin:----------->")
            const cell = e.detail.cell
            const cellId = cell.id
            const fenceKey = e.currentTarget.dataset.keyId
            console.log(cell)
            console.log(fenceKey)
            console.log("-------------->获取规格 end  :----------->")
            const judger = this.data.judger
            const res = await judger.judge(cell, fenceKey)
            console.log("-------------->onCellTap begin:----------->")
            console.log(res)
            console.log("-------------->onCellTap end  :----------->")
            // this.bindInitData(judger.fenceGroup)
            this.setData({
                fences: judger.fenceGroup.fences
            })

        }
    }
})
