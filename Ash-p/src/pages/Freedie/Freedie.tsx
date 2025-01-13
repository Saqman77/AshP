import wheel from '../../assets/freedi/Brutalist 52.png'
import './Freedie.scss'

const Freedie = () => {
  return (
    <div className="f-container">
      <div className="f-wrapper">
        <div className="f-top">
          <div className="f-left">
              <h2 className="f-heading">
                A supportive platform for all <br/><span className="f-colour">freelancers</span>
              </h2>
          </div>
          <div className="f-right">
              <div className='wheel'>
                <img src={wheel} alt="wheel-image" className='wheel-img' />
              </div>
          </div>
        </div>
        <div className="f-bottom"></div>
      </div>
      <div className="back-gear"></div>
    </div>
  )
}

export default Freedie