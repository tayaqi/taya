import React from 'react'
import CreatBackTitle from '../../../utils/util'
import './Teenager.css'

class Teenager extends React.Component {
  render () {
    return (
      <div className="teenagerFrame">
        <h2>青少年模式未开启</h2>
        <div>在青少年模式中，我们精选了一批教育类、知识类的内容呈现在首页，并且无法进行充值、打赏等操作。
          每日晚22时至次日早6时期间无法使用哔哩哔哩。</div>
        <div>开启青少年模式后，将自动开启时间锁，时间锁为40分钟。单日使用时长超过触发时间，
          需输入密码才能继续使用</div>
        <div>开启青少年模式，需先设置独立密码，如忘记密码可以通过申诉充值密码。</div>
        <div>青少年模式是哔哩哔哩为促进青少年健康成长做出的一次尝试，我们优先针对核心场景进行了优化，
          也将继续致力于优化更多场景。</div>

        <button className="openTeenager">开启青少年模式</button>

      </div>
    )
  }
}

export default CreatBackTitle(Teenager)