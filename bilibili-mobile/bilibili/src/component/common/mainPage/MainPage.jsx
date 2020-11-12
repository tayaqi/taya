import React from 'react';
import { TabBar } from 'antd-mobile'
import './MainPage.css'

import Home from '../../home/Home'
import Channel from '../../channel/Channel'
import Mine from '../../mine/Mine'
import Member from '../../member/Momber'
import Tendencise from '../../tendencise/Tendencise'
import { connect } from 'react-redux';
import changeTabSelecte from '../../../redux/common/common'

/**
 * 主页框架，包含底部的导航菜单
 */

class BottomBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      menu: [{
        title: "首页",
        key: "Home",
        selected: "Home-sel"
      }, {
        title: "频道",
        key: "Channel",
        selected: "Channel-sel"
      }, {
        title: "动态",
        key: "Tendencise",
        selected: "Tendencise-sel"
      }, {
        title: "会员购",
        key: "Member",
        selected: "Member-sel"
      }, {
        title: "我的",
        key: "Mine",
        selected: "Mine-sel"
      }]
    };
  }

  ContentRender = (pageName) => {
    switch (pageName) {
      case 'Home':
        return <Home {...this.props} />
      case 'Channel':
        return <Channel {...this.props} />
      case 'Mine':
        return <Mine {...this.props} />
      case 'Tendencise':
        return <Tendencise {...this.props} />
      case 'Member':
        return <Member {...this.props} />
      default:
        return <Home {...this.props} />
    }
  }

  render () {
    const content = this.state.menu.map((item) => {
      return (
        <TabBar.Item
          title={item.title}
          key={item.key}
          onPress={() => {
            this.props.ChangeSelect(item.key)
          }}
          selected={this.props.store.commonReducer.selectItem === item.key}
          icon={<div className={item.key}></div>}
          selectedIcon={<div className={item.selected}></div>}
        >
          {this.ContentRender(item.key)}
        </TabBar.Item>
      )
    })
    return (
      <div className="outFrame">
        <TabBar
          prerenderingSiblingsNumber={0}
          unselectedTintColor="#949494"
          tintColor="#33A3F4">
          {content}
        </TabBar>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    store: state
  }
}

function mapDispatchToProps (dispatch) {
  return {
    ChangeSelect: (selectItem) => dispatch(changeTabSelecte(selectItem))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BottomBar)