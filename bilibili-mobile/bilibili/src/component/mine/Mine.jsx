import React from 'react'
import BaseInfo from './baseInfo/BaseInfo'
import GridFunc from './gridFunc/GridFunc'

export default class Mine extends React.Component {

  render () {
    return (
      <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <BaseInfo {...this.props} />
        <GridFunc {...this.props} />
      </div>
    )
  }
}