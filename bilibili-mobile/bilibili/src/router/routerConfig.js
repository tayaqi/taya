import MainPage from '../component/common/mainPage/MainPage'
import BaseSetup from '../component/mine/baseSetup/BaseSetup'
import ModelChange from '../component/mine/modelchange/ModelChange'
import CusService from '../component/mine/cusService/CusService'


/**
 * 统一管理了路由列表，并且定义了跳转动画
 * justify : 主轴方向的淡入淡出 （x轴）
 * align : 交叉轴方向的淡入淡出
 */
export const RouterConfig = [
  { path: '/', component: MainPage, animation: "justify" },
  { path: '/BaseSetup', component: BaseSetup, animation: "justify" },
  { path: '/Teenager', component: ModelChange, animation: "align" },
  { path: '/ClassModel', component: ModelChange, animation: "align" },
  { path: '/CusService', component: CusService, animation: "justify" },
]

/**
 * 获取location 与 path 匹配的项
 */
export const getSceneConfig = location => RouterConfig.find(config => new RegExp(`^${config.path}$`).test(location.pathname)).animation