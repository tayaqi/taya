import React from 'react'
import {
  CloudDownloadOutlined, HistoryOutlined, StarOutlined, PlayCircleOutlined, BulbOutlined, FlagOutlined,
  FolderAddOutlined, ReadOutlined, SkinOutlined, SolutionOutlined, CommentOutlined, AccountBookOutlined,
  VideoCameraAddOutlined, RocketOutlined, CustomerServiceOutlined, RedEnvelopeOutlined, BookOutlined,
  SettingOutlined, InsuranceOutlined
} from '@ant-design/icons'
import { Flex, List } from 'antd-mobile'
import './GridFunc.css'

export default class GridFunc extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  iconClick (page) {
    this.props.history.push({
      pathname: '/' + page
    })
  }

  /**  */
  renderFunc (param) {
    return <Flex wrap="wrap">
      {param.map((item, index) => {
        return <div key={index} className="gridFrame" onClick={() => { this.iconClick(item.name) }}>
          <Flex direction="column" justify="between">
            {item.value} {item.name}
          </Flex>
        </div>
      })}
    </Flex>
  }

  /** 离线缓存 历史记录 我的收藏 稍后再看
   * <CloudDownloadOutlined />
   * <HistoryOutlined />
   * <StarOutlined />
   * <PlayCircleOutlined />
   */
  renderVedioBar () {
    const VedioBarContent = [
      { name: "离线缓存", value: <CloudDownloadOutlined className="VedioBarIcon" /> },
      { name: "历史记录", value: <HistoryOutlined className="VedioBarIcon" /> },
      { name: "我的收藏", value: <StarOutlined className="VedioBarIcon" /> },
      { name: "稍后再看", value: <PlayCircleOutlined className="VedioBarIcon" /> }
    ]
    return this.renderFunc(VedioBarContent)
  }

  /** 创作中心 ... */
  renderCreate () {
    const CreateContent = [
      { name: "创作首页", value: <BulbOutlined className="creatCenter" /> },
      { name: "创作学院", value: <ReadOutlined className="creatCenter" /> },
      { name: "投稿领会员", value: <FolderAddOutlined className="creatCenter" /> },
      { name: "热门活动", value: <FlagOutlined className="creatCenter" /> }
    ]
    return this.renderFunc(CreateContent)
  }

  /** 推荐服务 ... */
  renderService () {
    const ServiceContent = [
      { name: "我的课程", value: <SolutionOutlined className="ServiceIcon" /> },
      { name: "个性装扮", value: <SkinOutlined className="ServiceIcon" /> },
      { name: "推荐领红包", value: <RedEnvelopeOutlined className="ServiceIcon" /> },
      { name: "游戏中心", value: <RocketOutlined className="ServiceIcon" /> },
      { name: "我的钱包", value: <AccountBookOutlined className="ServiceIcon" /> },
      { name: "直播中心", value: <VideoCameraAddOutlined className="ServiceIcon" /> },
      { name: "反馈论坛", value: <CommentOutlined className="ServiceIcon" /> }
    ]
    return this.renderFunc(ServiceContent)
  }

  /** 列表 */
  renderBottomList () {
    const listContent = [
      { name: "联系客服", page: "CusService", value: <CustomerServiceOutlined /> },
      { name: "课堂模式", page: "ClassModel", value: <BookOutlined /> },
      { name: "青少年模式", page: "Teenager", value: <InsuranceOutlined /> },
      { name: "设置", page: "BaseSetup", value: <SettingOutlined /> }
    ]
    return <div className="listIcon">
      {listContent.map((item, index) => {
        return <List.Item
          key={index}
          thumb={item.value}
          arrow="horizontal"
          onClick={() => { this.iconClick(item.page) }}
        >{item.name}</List.Item>
      })}
    </div>
  }

  render () {
    return (
      <div className="scrollStyle">
        {this.renderVedioBar()}
        <div className="titleFont">创作中心</div>
        {this.renderCreate()}
        <div className="titleFont">推荐服务</div>
        {this.renderService()}
        <div className="titleFont">更多服务</div>
        {this.renderBottomList()}
      </div>
    )
  }
}