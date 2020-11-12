import React from 'react'
import { NavBar, Icon } from 'antd-mobile'

const CreatBackTitle = (WaContent) => {
  return class extends React.Component {
    render () {
      return <div style={{ width: "100%", height: "100%", position: "fixed", top: "0", backgroundColor: "#f7f7f7" }}>
        <NavBar
          mode="light"
          icon={<Icon type="left" color="#000" />}
          onLeftClick={() => this.props.history.go(-1)}
        >设置</NavBar>
        <WaContent />
      </div>
    }
  }
}

export default CreatBackTitle