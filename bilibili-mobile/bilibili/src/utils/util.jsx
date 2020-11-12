import React from 'react'
import { NavBar, Icon } from 'antd-mobile'

const CreatBackTitle = (WaContent, title) => {
  return class extends React.Component {

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
        <WaContent />
      </div >
    }
  }
}

export default CreatBackTitle