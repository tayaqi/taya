import React from 'react'
import { Flex } from 'antd-mobile'
import { ScanOutlined, BellOutlined, RightOutlined, ManOutlined, WomanOutlined } from '@ant-design/icons';
import { Avatar } from 'antd'
import './BaseInfo.css'


export default class BaseInfo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      userName: "taya",
      isMember: true,
      userSex: "man",
      userLve: "5",
      property_B: "10",
      property_coin: "1607",
      dynamic: "2",
      fcous: "12",
      fans: "1",
    }
  }

  /* 二维码扫描图标 和 主题切换图标 点击事件 */
  headerIconClick (info) {
    console.log(info)
  }

  /* 渲染头部的二维码扫描图标 和 主题切换图标 */
  renderHeadIcon () {
    return <Flex justify="end">
      <ScanOutlined className="headIcon" onClick={() => { this.headerIconClick('scan') }} />
      <BellOutlined className="headIcon" onClick={() => { this.headerIconClick('theme') }} />
    </Flex>
  }

  /* 渲染头部的个人信息 */
  renderMineInfo () {
    return <div className="headFrame"><Flex>
      <div><Avatar src={require('../../../assets/head.png').default} size={64} /></div>
      <Flex.Item>
        <div>
          <span className="headNameStyle">{this.state.userName}</span>
          <span className={[this.state.userSex === 'man' ? 'ManOutlined' : 'WomanOutlined'].join(' ')}>{this.state.userSex === 'man' ? <ManOutlined /> : <WomanOutlined />}</span>
          <span className="headLevel">Lv{this.state.userLve}</span>
        </div>
        <div><span className="headMember">{this.state.isMember ? '年度大会员' : '非会员'}</span></div>
        <div className="headSpaceColor">B币：{this.state.property_B} <span style={{ marginLeft: '1rem' }}>硬币：{this.state.property_coin}</span></div>
      </Flex.Item>
      <div className="headSpaceColor">空间  <RightOutlined className="headSpaceColor" /></div>
    </Flex>
    </div>
  }

  /* 动态  关注  粉丝 */
  renderDynamic () {
    const content = [
      { name: '动态', value: this.state.dynamic, flag: '' },
      { name: '', value: '', flag: "border", },
      { name: '关注', value: this.state.fcous, flag: '' },
      { name: '', value: '', flag: "border" },
      { name: '粉丝', value: this.state.fans, flag: '' }
    ]
    return <Flex justify="center" align="center">
      {content.map((item, index) => {
        return <div key={index} className={item.flag === "" ? "headDynamicFrame" : "headborder"}>
          <div style={{ fontWeight: "700", fontSize: "1rem" }}>{item.value}</div>
          <div className="headSpaceColor">{item.name}</div>
        </div>
      })}
    </Flex>
  }

  render () {
    return (
      <div>
        { this.renderHeadIcon()}
        { this.renderMineInfo()}
        {this.renderDynamic()}
        <div style={{ height: '10px' }}></div>
        <Flex align="end">
          <div className="BGgradient"></div>
          <Flex.Item>
            <div className="memberBackground">
              <div className="memberFontColor">
                <div>我的大会员</div>
                <div style={{ opacity: "0.7" }}>番剧国创抢先看</div>
              </div>
              <RightOutlined />
            </div>
          </Flex.Item>
          <div className="BGgradient"></div>
        </Flex>
      </div>
    )
  }
}