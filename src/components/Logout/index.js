// Write your code here
import './index.css'

const Logout = props => {
  const {loginStatus} = props
  const text = loginStatus ? 'Login' : Logout
  return {text}
}

export default Logout
