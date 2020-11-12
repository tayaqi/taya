import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { RouterConfig, getSceneConfig } from './routerConfig'
import './router.css'

let oldLocation = ''

const Routes = withRouter(({ location, history }) => {
  let classNames = ''
  if (history.action === 'PUSH') {
    classNames = getSceneConfig(location) + 'Push'
  } else if (history.action === 'POP' && oldLocation) {
    classNames = getSceneConfig(oldLocation) + 'Pop'
  }
  oldLocation = location

  return <TransitionGroup childFactory={child => React.cloneElement(child, { classNames })}>
    <CSSTransition timeout={500}
      key={location.pathname}>
      <Switch location={location}>
        {RouterConfig.map((item, index) => {
          return <Route exact key={index} {...item}></Route>
        })}
      </Switch>
    </CSSTransition>
  </TransitionGroup>
})


export default class AppRouter extends Component {
  render () {
    return (
      <Router>
        <Routes />
      </Router>
    )
  }
}