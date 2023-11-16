// Write your code here
/* Write your CSS here */
import './index.css'

const Message = props => {
  const {loginStatus} = props
  console.log(loginStatus)
  const text = loginStatus ? 'Welcome User' : 'Please Login'
  return <h1 className="heading">{text}</h1>
}

export default Message
