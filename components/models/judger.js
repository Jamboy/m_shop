/**
 * @name: judger
 * @author: Kivia
 * @date: 2021-03-03 17:59
 * @description：judger 规格状态
 * @update: 2021-03-03 17:59
 */
import {SkuCode} from "./sku-code";
import {CellStatus} from "../../core/enum";

class Judger {
    fenceGroup
    pathDict = []  //可选cell路径字典
    fences = []

    constructor(fenceGroup) {
        this.fenceGroup = fenceGroup
        this.fences = fenceGroup.fences
        this._initPathDict()
        console.log("-------------->开始加载constructor(fenceGroup begin:----------->")
        console.log(fenceGroup)
        console.log("-------------->结束加载 constructor(fenceGroupend  :----------->")

    }

    /**
     * 初始化路径字典
     */
    async _initPathDict() {
        this.fenceGroup.skuList.forEach(s => {
            const skuCode = new SkuCode(s.code)
            this.pathDict = this.pathDict.concat(skuCode.totalSegments)
        })
        console.log("-------------->开始加载pathDict begin:----------->")
        console.log(this.pathDict)
        console.log("-------------->加载pathDict end  :----------->")
    }

    /**
     * 初始化Cell初始状态
     * 1. 单个fence-cell 组成 path
     * 2. 到字典找，不存在的set forbidden
     * @private
     */
    async _initCellStatus() {
        const singlePath = this._initSinglePath() //获取到可选单选path
        const allSinglePath = await this.findAllKey()
        console.log("-------------->开始加载 allSinglePath begin:----------->")
        console.log(allSinglePath)
        allSinglePath.forEach(e => {
            console.log("进入循环")
            // if (singlePath.includes(e)) {
            //     console.log("return")
            //     return
            // }
            this._changeCellStatusToForbidden(e)
        })
        console.log("-------------->开始加载 allSinglePath begin:----------->")
        return "1"
    }

    async _changeCellStatusToForbidden(e) {
        console.log("-------------->_changeCellStatusToForbidden begin:----------->")
        const keyArr = e.split('-')
        const fenceKey = keyArr[0]
        const cellKey = keyArr[1]
        const cell = await this._findCurrentCell(fenceKey, cellKey)
        console.log(cell)
        if (cell.status === CellStatus.WAiTING) {
            //可选-选中
            console.log('进入waiting')
            cell.status = CellStatus.FORBIDDEN
            console.log(cell.status)
        }
        console.log("-------------->结束加载_changeCellStatusToForbidden end  :----------->")

    }

    /**
     * 找可选单选path
     */
    _initSinglePath() {
        console.log("-------------->_initSinglePath begin:----------->")

        const singlePathDict = this.pathDict.filter(e =>
            !e.includes('#')
        )
        let removeDupPath = []
        singlePathDict.forEach(e => {

            const existed = removeDupPath.find(t => {
                return t === e
            })
            if (existed || e === '1-45') {
                return
            }
            removeDupPath.push(e)
        })

        console.log(singlePathDict)
        console.log('removeDupPath')
        console.log(removeDupPath)
        console.log("-------------->_initSinglePath end  :----------->")
        return removeDupPath

        // if (!temp.find(t => {
        //    return t === e
        // })) {
        //     temp.push(e)
        // }
        //记得return
        // console.log(e)
        // if (temp.find(v =>
        //     记得return v === "4-14"
        // )) {
        //     temp.push(e)
        // }
    }


    /**
     *
     * @param cell
     * @param x 行
     * @param y 列
     */
    judge(cell, x, y) {
        this.findCellByPosition(x, y)
    }

    /**
     * 找到cell并改状态
     * @param x
     * @param y
     */
    findCellByPosition(x, y) {
        console.log(this.fences)
        const cell = this.fences[x].cells[y]
        this._changeCellStatus(cell)
        console.log(cell)
    }

    /**
     * @description
     */

    /**
     * @description 根据key找cell并修改status
     * @param cell
     */
    async judgeBykey(cell, fenceKey) {
        console.log("-------------->judge begin:----------->")
        console.log(cell)
        console.log(fenceKey)
        console.log(cell.id)
        console.log("-------------- judge end  :----------->")

        var currentCell = await this._findCurrentCell(fenceKey, cell.id)
        console.log("-------------->当前点击cell begin:----------->")
        console.log(currentCell)
        console.log("-------------->点击cell   end  :----------->")
        this._changeCellStatus(currentCell)
        return this.fenceGroup
    }

    /**
     * @description 改变当前cell的状态，
     * 可以点击-selected waiting 切换
     */
    _changeCellStatus(currentCell) {
        console.log("-------------->_changeCellStatus begin:----------->")
        if (currentCell.status === CellStatus.WAiTING) {
            //可选-选中
            console.log('进入waiting')
            currentCell.status = CellStatus.SELECTED
            console.log(currentCell.status)
            return
        }

        if (currentCell.status === CellStatus.SELECTED) {
            //选中-可选
            console.log('进入selected')
            currentCell.status = CellStatus.WAiTING
            console.log(currentCell.status)
            return

        }
        console.log("-------------->_changeCellStatus end  :----------->")

    }


    /**
     * 根据key 找cell
     * @param fenceKey
     * @param cellKey
     * @returns {Promise<*>}
     * @private
     */
    async _findCurrentCell(fenceKey, cellKey) {
        console.log("-------------->_findCurrentCell begin:----------->")
        // console.log("fenceKey" + fenceKey)
        // console.log(cellKey)
        const fence = await this.fences.find(e => {
            return e.id == fenceKey
        })
        if (!fence) {
            console.log("retrun fence")
            return
        }
        const cell = await fence.cells.find(e => {
            return e.id == cellKey
        })
        if (!cell) {
            console.log("retrun cell")

            return
        }
        // console.log("-------------->开始寻找fence begin:----------->")
        // console.log(fence)
        // console.log(cell)
        // console.log("-------------->寻找fence end  :----------->")
        console.log("-------------->_findCurrentCell end  :----------->")

        return cell
    }

    /**
     * 找到需要被禁用的cell
     *
     */
    findForbiddenCellBykey(e) {
        e
    }

    async findAllKey() {
        const allKey = []
        this.fences.forEach(f => {
            const fKey = f.id
            f.cells.forEach(c => {
                const cKey = c.id
                allKey.push(fKey + '-' + cKey)
            })
        })

        console.log("-------------->开始加载 findAllKey   begin:----------->")
        console.log(allKey)
        console.log("-------------->结束加载 findAllKey   end  :----------->")
        return allKey
    }
}

export {
    Judger
}