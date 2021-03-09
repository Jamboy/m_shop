import {Cell} from "./cell";
import {CellStatus} from "../../core/enum";

/**
 * @name: SkuPending
 * @author: Kivia
 * @date: 2021-03-09 10:37
 * @description：SkuPending 记住选中的cell
 * @update: 2021-03-09 10:37
 */


class SkuPending {
    pending = []

    constructor() {
    }

    /**
     * 初始化默认sku
     * @param sku
     */
    init(sku) {
        for (let i = 0; i < sku.specs.length; i++) {
            const cell = new Cell(sku.specs[i]);
            this.insertCell(cell, i)
        }
    }

    /**
     * 插入cell
     * @param cell
     * @param x cell所在行号
     */
    insertCell(cell, x) {

        this.pending[x] = cell
    }

    /**
     * 删除cell
     * @param x 行号
     */
    removeCell(x) {
        this.pending[x] = null
    }

    /**
     * 根据行号查找cell
     * @param x
     * @returns {*}
     */
    findSelectedCellByX(x) {
        return this.pending[x]
    }


    /**
     * 判断当前cell所在行是否已有其他已选cell
     * @param cell
     * @param x
     * @returns {boolean}
     */
    isSelected(cell, x) {
        const pendingCell = this.pending[x]
        if (!pendingCell) {
            return
        }
        return pendingCell.id === cell.id
    }
}

export {
    SkuPending
}