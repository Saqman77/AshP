import img1 from '../../assets/about/Aisha Panjwaneey.jpeg'
// import img2 from '../../assets/about/AshPReads-EditingServices-Logo.png'
import img3 from '../../assets/about/AshPReads-EditingServices-Paid BR.png'
import img4 from '../../assets/about/AshPReads-Editng Services-Line or Content Editing.png'
import img5 from '../../assets/about/Hira.jpg'
import ParallaxImage from './ParallaxImage'
import './scroll.scss'
const Scroll = () => {
  return (
    <div className='s-container'>

        <section className='panel ash'>

            <div className="panel-front">


                <div className="panel-top">

                </div>

                <div className="panel-center">

                    <div className="panel-left">

                    </div>

                    <div className="panel-center">

                    </div>
                    <div className="panel-right">

                    </div>
                    
                </div>
                <div className="panel-bottom">

                </div>


            </div>

            <div className='ash-img'>
                <ParallaxImage src={img1} alt="" className='s-imgs' />
            </div>

        </section>


        <section className='panel projects'>

            <div className="panel-front">


                <div className="panel-top">

                </div>

                <div className="panel-center">

                    <div className="panel-left">

                    </div>

                    <div className="panel-center">

                    </div>
                    <div className="panel-right">

                    </div>
                    
                </div>
                <div className="panel-bottom">

                </div>


            </div>

                <div className='ash-img'>

                    <ParallaxImage src={img3} alt="" className='s-imgs' />

                </div>




        </section>
        <section className='panel ash'>

                        <div className="panel-front">


                            <div className="panel-top">

                            </div>

                            <div className="panel-center">

                                <div className="panel-left">

                                </div>

                                <div className="panel-center">

                                </div>
                                <div className="panel-right">

                                </div>
                            </div>
                            
                            <div className="panel-bottom"></div>
                        </div>

            <div className='ash-img'>
                <ParallaxImage src={img5} alt="" className='s-imgs' />
            </div>

        </section>


        <section className='panel projects'>

                        <div className="panel-front">


                            <div className="panel-top">

                            </div>

                            <div className="panel-center">

                                <div className="panel-left">

                                </div>

                                <div className="panel-center"></div>
                                <div className="panel-right"></div>
                            </div>
                            
                            <div className="panel-bottom"></div>
                        </div>

                <div className='ash-img'>

 
                    <ParallaxImage src={img4} alt="" className='s-imgs' />

                </div>



        </section>

        

    </div>
  )
}

export default Scroll