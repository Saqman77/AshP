import ThreeJSScene from "../../components/about/Three"
import './Portfolio.scss'

const Portfolio = () => {
  return (
      <div className="a-main">
        <div className="a-content"></div>
        <div className="canvas">
          <ThreeJSScene/>
        </div>
      </div>
  )
}

export default Portfolio