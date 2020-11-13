import React from 'react'
import CreatBackTitle from '../../common/highBackTitle/HighBackTitle'
import './ModelChange.css'

class Teenager extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      modelName: this.props.location.pathname.substring(1) === "ClassModel" ? "课堂" : "青少年"
    }
  }

  ContentRender (content) {

  }

  render () {

    const teenager = [
      "在青少年模式中，我们精选了一批教育类、知识类的内容呈现在首页，并且无法进行充值、打赏等操作。每日晚22时至次日早6时期间无法使用哔哩哔哩。",
      "开启青少年模式后，将自动开启时间锁，时间锁为40分钟。单日使用时长超过触发时间，需输入密码才能继续使用",
      "开启青少年模式，需先设置独立密码，如忘记密码可以通过申诉充值密码。",
      "青少年模式是哔哩哔哩为促进青少年健康成长做出的一次尝试，我们优先针对核心场景进行了优化，也将继续致力于优化更多场景。"
    ]
    const classmodel = [
      "在课堂模式中，我们为用户提供在线直播课程，并精选了一批优质视频呈现在首页。",
      "开启课堂模式，需要设置独立密码，如忘记密码，可通过申诉充值密码。",
      "为营造一个健康的学习环境，该模式中无法进行充值、打赏等操作。",
      "课堂模式是哔哩哔哩为促进用户在线学习做出的一项尝试，我们将持续扩充更多精选内容，给用户提供更好的线上学习体验。"
    ]
    const conte = this.state.modelName === "课堂" ? classmodel : teenager
    return (
      <div className="teenagerFrame">
        <h2>{this.state.modelName}模式未开启</h2>
        {conte.map((item, index) => {
          return <div key={index}>{item}</div>
        })}
        <button className="openTeenager">开启{this.state.modelName}模式</button>
      </div>
    )
  }
}

export default CreatBackTitle(Teenager)