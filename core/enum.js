/**
 * @name: enum
 * @author: Kivia
 * @date: 2021-03-04 11:03
 * @description：enum cell选中的状态
 * @update: 2021-03-04 11:03
 */

/**
 *
 * @type {{SELECTED:选中 string , WAiTING:可选 string, FORBIDDEN:不可选 string}}
 */
const CellStatus = {
    FORBIDDEN: 'forbidden',
    SELECTED: 'selected',
    WAiTING: 'waiting'
}

export {
    CellStatus
}