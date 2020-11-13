import React from 'react'
import { NavBar, Icon } from 'antd-mobile'

/**
 * 高阶组件
 * 为传入的内容增加左上角的返回按钮 和 标题头 ，注入props
 * 
 * @param {*} WaContent 
 * @param {*} title 
 */
const CreatBackTitle = (WaContent, title) => {
  return class extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
      }
    }

    render () {
      let backgroundcolor = "#f6f6f6";
      if (title === undefined) backgroundcolor = ""
      const frameStyle = {
        width: "100%",
        height: "100%",
        position: "fixed",
        top: "0",
        backgroundColor: backgroundcolor,
        display: "flex",
        flexDirection: "column"
      };
      return <div style={frameStyle}>
        < NavBar
          mode="light"
          icon={< Icon type="left" color="#000" />}
          onLeftClick={() => this.props.history.go(-1)}
        > {title}</NavBar >
        <WaContent {...this.props} />
      </div >
    }
  }
}

export default CreatBackTitle