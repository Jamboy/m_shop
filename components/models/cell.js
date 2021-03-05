/**
 * @name: cell
 * @author: Kivia
 * @date: 2021-03-03 13:58
 * @description：cell 矩阵值
 * @update: 2021-03-03 13:58
 */
import {CellStatus} from "../../core/enum";

class Cell {
    title
    id
    status = CellStatus.WAiTING

    constructor(spec) {
        this.title = spec.value
        this.id = spec.value_id
    }
}

export {
    Cell
}