/**
 * @name: fence-group
 * @author: Kivia
 * @date: 2021-03-02 11:40
 * @description：fence-group 提取处理一组栅栏值
 * @update: 2021-03-02 11:40
 */
import {Matrix} from "./matrix";
import {Fence} from "./fence";
import {Judger} from "./judger";

class FenceGroup {
    spu
    skuList = []
    fences = []

    constructor(spu) {
        this.spu = spu
        this.skuList = spu.sku_list
    }

    /**
     * 循环初始化fences
     */
    initFences1() {
        const matrix = this._createMatrix(this.skuList) //创建矩阵
        const fences = []
        let currentJ = -1
        matrix.each((element, i, j) => {
            if (currentJ !== j) {
                //循环新列，创建新fence
                currentJ = j
                fences[currentJ] = this._createFence()
            }
            //fence 赋值
            fences[currentJ].pushValueTitle(element.value)
        })
        console.log(fences)
    }

    /**
     * 转秩封装
     */
    initFences() {
        const matrix = this._createMatrix(this.skuList) //创建规格数据矩阵
        const fences = []
        const newMatrix = matrix.transpose()  //转秩
        console.log("-------------->开始处理专职后的矩阵 begin:----------->")
        newMatrix.forEach(r => {
            // const fence = new Fence(r)
            const fence = this._createFence(r)
            fence.init()
            fences.push(fence)
        })
        this.fences = fences
        console.log("-------------->结束处理专职后的矩阵 end  :----------->")
        console.log(fences)
    }

    /**
     * 创建fence
     * @param element
     * @private
     */
    _createFence(r) {
        const fence = new Fence(r)
        return fence
    }

    /**
     * 创建矩阵
     * @param skuList
     * @return Matrix
     * @private
     */
    _createMatrix(skuList) {
        const m = []
        skuList.forEach(sku => {
            m.push(sku.specs)
        })
        console.log("-------------->创建矩阵 begin:----------->")
        console.log(m)
        console.log("-------------->创建矩阵 end  :----------->")
        return new Matrix(m)
    }


}

export {
    FenceGroup
}