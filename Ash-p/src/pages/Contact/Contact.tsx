import './Contact.scss'
import FB from '../../assets/freedi/Facebook.png'
import INSTA from '../../assets/freedi/insta.png'
import X from '../../assets/freedi/X.png'
import LINK from '../../assets/freedi/linked.png'

const Contact = () => {
  return (
    <div className="c-wrapper">
      <div className="c-top">
        <div className="c-left"></div>
        <div className="c-right"></div>
      </div>
      <div className="c-bottom">
        <ul className="c-info">
          <li></li>
          <li></li>
        </ul>
        <ul className="c-location">
          <li></li>
          <li></li>
        </ul>
        <ul className="c-socials">
          <li><a href=""><img src={FB} alt="" className='social' /></a></li>
          <li><a href=""><img src={INSTA} alt="" className='social' /></a></li>
          <li><a href=""><img src={X} alt="" className='social' /></a></li>
          <li><a href=""><img src={LINK} alt="" className='social' /></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Contact