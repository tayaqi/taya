import React from 'react'
import { List } from 'antd-mobile'
import './BaseSetup.css'
import CreatBackTitle from '../../../utils/util'

class BaseSetup extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render () {
    const Mycontent = [
      [
        { title: "账号资料", name: "" }, { title: "安全隐私", name: "" }, { title: "收货信息", name: "" }
      ], [
        { title: "开屏启动画面设置", name: "" }, { title: "首页推荐设置", name: "" }, { title: "播放设置", name: "" },
        { title: "缓存设置", name: "" }, { title: "追番设置", name: "" }
      ], [
        { title: "消息设置", name: "" }, { title: "推送设置", name: "" }, { title: "其他设置", name: "" }
      ], [
        { title: "深色设置", name: "" }
      ], [
        { title: "反馈与建议", name: "" }, { title: "关于bili", name: "" }, { title: "广告合作", name: "" }
      ], [
        { title: "用户协议", name: "" }, { title: "隐私政策", name: "" }, { title: "隐私权限设置", name: "" }
      ]
    ]
    return (
      <div className="contentFrame">
        {Mycontent.map((item, index) => {
          return <List key={index} style={{ marginTop: '10px' }}>
            {item.map((item1, index1) => {
              return <List.Item
                key={index1}
                arrow="horizontal"
                onClick={() => { console.log("xxxx") }}
              >{item1.title}</List.Item>
            })}
          </List>
        })}
      </div>
    )
  }
}

export default CreatBackTitle(BaseSetup)