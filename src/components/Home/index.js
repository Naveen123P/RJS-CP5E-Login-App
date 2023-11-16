// Write your code here
// Write your code here import Login from '../Login/index' import Logout from '../Logout/index'
import {Component} from 'react'
import Message from '../Message/index'
import Login from '../Login/index'
import Logout from '../Logout/index'
import './index.css'

class Home extends Component {
  state = {isLogin: false}

  changeState = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state
    const aaa = isLogin ? (
      <Logout loginStatus={isLogin} />
    ) : (
      <Login loginStatus={isLogin} />
    )
    console.log(aaa)
    return (
      <div className="bg-container1">
        <div className="bg-container2">
          <Message loginStatus={isLogin} />
          <button className="button" type="button" onClick={this.changeState}>
            {aaa}
          </button>
        </div>
      </div>
    )
  }
}

export default Home
