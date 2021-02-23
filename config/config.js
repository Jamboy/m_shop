/*
 * @Description: 
 * @Author: Jamboy
 * @Date: 2021-02-22 09:47:12
 * @LastEditTime: 2021-02-22 17:06:12
 */
const ApiBaseUrl = 'https://192.168.3.59:9777/' //ghq测试api
const LocalShopUrl = 'http://127.0.0.1:8360/api/' //本地商城测试api

const config = {
    ApiBaseUrl: ApiBaseUrl,
    LocalShopUrl: LocalShopUrl,
    UserInfo: ApiBaseUrl + '/admin/acl/info',

    // begin 本地商城测试url
    IndexUrl: LocalShopUrl + 'index/index',
    CatalogList: LocalShopUrl + 'catalog/index',
    CatalogCurrent: LocalShopUrl + 'catalog/current',
    AuthLoginByWeixin: LocalShopUrl + 'auth/loginByWeixin',
    GoodsCount: LocalShopUrl + 'goods/count',
    GoodsList: LocalShopUrl + 'goods/list',
    GoodsCategory: LocalShopUrl + 'goods/category',
    GoodsDetail: LocalShopUrl + 'goods/detail',
    GoodsNew: LocalShopUrl + '1',
    GoodsHot: LocalShopUrl + 'goods/hot',
    GoodsRelated: LocalShopUrl + 'goods/related',
    BrandList: LocalShopUrl + 'brand/list',
    BrandDetail: LocalShopUrl + 'brand/detail',
    CartList: LocalShopUrl + 'cart/index',
    CartAdd: LocalShopUrl + 'cart/add',
    CartUpdate: LocalShopUrl + 'cart/update',
    CartDelete: LocalShopUrl + 'cart/delete',
    CartChecked: LocalShopUrl + 'cart/checked',
    CartGoodsCount: LocalShopUrl + 'cart/goodscount',
    CartCheckout: LocalShopUrl + 'cart/checkout',
    OrderSubmit: LocalShopUrl + 'order/submit',
    PayPrepayId: LocalShopUrl + 'pay/prepay',
    CollectList: LocalShopUrl + 'collect/list',
    CollectAddOrDelete: LocalShopUrl + 'collect/addordelete',
    CommentList: LocalShopUrl + 'comment/list',
    CommentCount: LocalShopUrl + 'comment/count',
    CommentPost: LocalShopUrl + 'comment/post',
    TopicList: LocalShopUrl + 'topic/list',
    TopicDetail: LocalShopUrl + 'topic/detail',
    TopicRelated: LocalShopUrl + 'topic/related',
    SearchIndex: LocalShopUrl + 'search/index',
    SearchResult: LocalShopUrl + 'search/result',
    SearchHelper: LocalShopUrl + 'search/helper',
    SearchClearHistory: LocalShopUrl + 'search/clearhistory',
    AddressList: LocalShopUrl + 'address/list',
    AddressDetail: LocalShopUrl + 'address/detail',
    AddressSave: LocalShopUrl + 'address/save',
    AddressDelete: LocalShopUrl + 'address/delete',
    RegionList: LocalShopUrl + 'region/list',
    OrderList: LocalShopUrl + 'order/list',
    OrderDetail: LocalShopUrl + 'order/detail',
    OrderCancel: LocalShopUrl + 'order/cancel',
    OrderExpress: LocalShopUrl + 'order/express',
    FootprintList: LocalShopUrl + 'footprint/list',
    FootprintDelete: LocalShopUrl + 'footprint/delete',
}

export {
    config
}