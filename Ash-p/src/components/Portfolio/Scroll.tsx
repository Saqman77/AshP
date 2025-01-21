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
                   <h3 className='s-heading'>Aisha Panjwaneey - Ash P</h3>
                   <ul className='services-list'>
                    <li><p className='s-text'>Developmental</p></li>
                    <li><p className='s-text'>Line</p></li>
                    <li><p className='s-text'>Copy Editor</p></li>
                    <li><p className='s-text'>Proofreader</p></li>
                    <li><p className='s-text'>Translator</p></li>
                    <li><p className='s-text'>Beta Reader</p></li>
                    <li><p className='s-text'>Sensitivity Reader</p></li>
                   </ul>
                </div>

                <div className="panel-center">

                    <div className="panel-left">

                        <div className='ash2-img'>

                            <ParallaxImage src={img1} alt="" className='s-imgs' />

                        </div>

                    </div>

                    <div className="sub-panel-center">

                        <div className="center-content">

                            <div className="center-heading">

                                <h2 className='center-header'>

                                    QUALIFICATIONS

                                </h2>

                            </div>

                            <div className="center-desc">

                                <p className='center-p'>

                                    Bachelor of Arts in Mass Communication, English Literature, and Education.

                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="panel-right">

                        <div className="cert-heading">

                            <h2 className='cert-header'>

                                CERTIFICATIONS AND COURSES

                            </h2>

                        </div>

                        <ul className='cert-list'>
                            <li><p className='cert-text'>Developmental</p></li>
                            <li><p className='cert-text'>Line</p></li>
                            <li><p className='cert-text'>Copy Editor</p></li>
                            <li><p className='cert-text'>Proofreader</p></li>
                            <li><p className='cert-text'>Translator</p></li>
                            <li><p className='cert-text'>Beta Reader</p></li>
                            <li><p className='cert-text'>Sensitivity Reader</p></li>
                    </ul>

                    </div>
                    
                </div>
                <div className="panel-bottom">

                    <p className='bottom-p'>
                        #RevPit 2025 Editor, Occasional co-host
                        of the Northwest Editors Guild, monthly
                        Editing with Disability/Chronic
                        Illness/Neurodivergence 
                        Virtual Chat, 
                        Mentor for aspiring editors, beta readers, 
                        and freelancers, Coach and Consultant for new authors.

                    </p>

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