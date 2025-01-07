import './cards.scss'
import img from '../../../assets/home/Frame 21.svg'
import { PropsWithChildren } from 'react';

type Props = {
    id: string;
    head: string;
    backGround: string | number | undefined;
    cardImg: string;
}

const Cards = ({id, head, backGround, cardImg}: Props) => {
  return (
    <div className='card-wrapper'
        id={id}
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
  )
}

export default Cards