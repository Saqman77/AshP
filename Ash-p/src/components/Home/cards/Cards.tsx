import './cards.scss'
import img from '../../../assets/home/Learning-pana.svg'
import { PropsWithChildren } from 'react';

type Props = {
    id: string;
    head: string;
    backGround: string | number | undefined;
    cardImg: string;
    desc: string;
}

const Cards = ({id, head, backGround, cardImg, desc}: Props) => {
  return (
    <div className='card-wrapper'
        id={id}

    >
      <div className="card">
        <div className="front"
                style={{
                  background: backGround
              }}
        >
            <div className="card-img">
                <img src={cardImg} alt="" className='cardImg'/>
            </div>
            <div className="card-heading">
              <p>{head}</p> 
            </div>
            <div className="flip-button">
                hover
            </div>
        </div>
        <div className="back"
                style={{
                  background: backGround
              }}
        >
          <div className="card-heading-back">
              <p>{head}</p> 
          </div>
          <div className="card-desc">
            <p className='back-desc'>
              {desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards