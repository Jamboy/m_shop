/**
 * @name: cell
 * @author: Kivia
 * @date: 2021-03-03 13:58
 * @description：cell 矩阵值
 * @update: 2021-03-03 13:58
 */

class Cell {
    title
    id

    constructor(spec) {
        this.title = spec.value
        this.id = spec.value_id
    }
}

export {
    Cell
}