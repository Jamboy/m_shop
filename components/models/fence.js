/**
 * @name: fence.js
 * @author: Kivia
 * @date: 2021-03-02 11:40
 * @description：fence.js
 * @update: 2021-03-02 11:40
 */
import {Cell} from "./cell";

class Fence {
    cells = []
    title
    id
    specs

    constructor(specs) {
        this.specs = specs
        this.title = specs[0].key
        this.id = specs[0].key_id
    }

    init() {
        this._initCells()
    }

    /**
     * 规格值去重
     * @private
     */
    _initCells() {
        this.specs.forEach(s => {
            //去重
            const existed = this.cells.some(c=>{
                return c.id === s.value_id
            })
            if (existed) {
                return
            }
            const cell = new Cell(s)
            this.cells.push(cell)
        })
    }


}

export {
    Fence
}