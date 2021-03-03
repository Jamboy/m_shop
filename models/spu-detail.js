/**
 * @name: spu-detail
 * @author: Kivia
 * @date: 2021-03-01 15:09
 * @description：spu-detail by id 获取商品详情信息
 * @update: 2021-03-01 15:09
 */
import {Http} from "../utils/http";
import {config} from "../config/config";

class SpuDetail {
    /**
     * 根据ID获取商品详情信息
     */
    static async getSpuDetail(id) {
        const res = await Http.request({
            url: `${config.GoodsDetail}?id=${id}`
        })
        return res.data
    }

    /**
     * get lin mock response
     * @param id
     * @returns {Promise<void>}
     */
    static async getMockSpu(id) {
        const res = await Http.request({
            url: `${config.MockGoodsDetail}?id=${id}`
        })
        return res
    }
}

export {
    SpuDetail
}