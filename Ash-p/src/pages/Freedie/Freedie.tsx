import { useState, useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import wheel from '../../assets/freedi/Brutalist 52.png';
import gear from '../../assets/freedi/Vector2.svg';
import FLists from '../../components/freedie/flist/FLists';
import frediebg from '../../assets/freedi/FrEdiBuddies without title.webp'
import './Freedie.scss';
import FCarousel from '../../components/freedie/fcarousel/FCarousel';
import { useThemeContext } from '../../utils/ThemeContextProvider';
// import ParallaxImage from '../../components/Portfolio/ParallaxImage';
import FreediePara from '../../components/freedie/freedie-para';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

const Freedie: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isCarouselVisible, setCarouselVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showDisclaimer, setShowDisclaimer] = useState(true); // Show disclaimer initially
  const bgref = useRef<HTMLDivElement>(null)
  const { isActive, removeClass } = useThemeContext();

  useEffect(() => {
    if (isActive) {
      removeClass();
      document.documentElement.classList.remove('active');
      document.body.classList.remove('active');
    }
  }, []);

  useEffect(() => {
    if (isCarouselVisible) {
      setScrollY(window.scrollY);
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = '100%';
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    }
  }, [isCarouselVisible]);

  const handleItemClick = (index: number) => {
    setSelectedIndex(index);
    setCarouselVisible(true);
  };

  const handleCloseCarousel = () => {
    setCarouselVisible(false);
  };
  useGSAP(() => {
    const tl = gsap.timeline();
    gsap.fromTo('.fredie-bg', 
      {
         clipPath: 'polygon(0 0, 0 0, 0 0, 0 0)',
        //  opacity:0.5, 
      }, // Fully hidden
      { 
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', // Full rectangle
        ease: 'none',
        // opacity:1,
        scrollTrigger: {
          trigger: '.fredie-bg',
          start: window.innerWidth > 1250 ? 'top 60%' : 'top 40%', // Starts when .fredie-bg enters the viewport
          end: window.innerWidth > 1250 ? 'top 20%' : 'top 20%', // Completes near the top
          scrub: 1, // Smoothly linked to scrolling
        }
      });

      tl.fromTo('.fredie-content',{background:'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0/ .0%) 50%, rgba(0, 0, 0, 0) 100%)'},{
        background:'linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0/ .28%) 50%, rgba(0, 0, 0, 0.8) 100%)',
        backdropFilter:'blur(2px)',
        webkitBackdropFilter:'blur(2px)',
        scrollTrigger: {
          trigger: '.fredie-bg',
          start: 'top 20%', // Starts when .fredie-bg enters the viewport
          end: 'top 20%', // Completes near the top
          scrub: 1, // Smoothly linked to scrolling
        }
      })
      tl.to('.fredie-text span',
      {
        // backgroundColor:'#33333365',
        // backdropFilter:'blur(5px)',
        // webkitBackdropFilter:'blur(5px)',
        textShadow:'2px 2px #000000',
        opacity:1,
        color:'#f9f9f9',
        scrollTrigger: {
          trigger: '.fredie-bg',
          start: 'top 20%', // Starts when .fredie-bg enters the viewport
          end: 'top 20%', // Completes near the top
          scrub: 1, // Smoothly linked to scrolling
        }
      })
      tl.fromTo('.fredie-text, .seperator',{
        transform:'translateY(-50%)'
      },{
        // backgroundColor:'#33333365',
        // backdropFilter:'blur(5px)',
        // webkitBackdropFilter:'blur(5px)',
        transform:'translateY(10%)',
        // color:'#f9f9f9',
        opacity:1,
        scrollTrigger: {
          trigger: '.fredie-bg',
          start: 'top 70%', // Starts when .fredie-bg enters the viewport
          end: 'bottom bottom', // Completes near the top
          scrub: 2, // Smoothly linked to scrolling
        }
      })
      tl.to('.fredie-section',{
        // backgroundColor:'#33333365',
        // backdropFilter:'blur(5px)',
        // webkitBackdropFilter:'blur(5px)',
        boxShadow:'0px 0px 4px 3px rgba(0, 0, 0, 0.514)',
        // color:'#f9f9f9',
        scrollTrigger: {
          trigger: '.fredie-bg',
          start: 'top 30%', // Starts when .fredie-bg enters the viewport
          end: 'top 20%', // Completes near the top
          scrub: 1, // Smoothly linked to scrolling
        }
      })
      
  }, { scope: bgref });
  

  return (
    <>
      {/* Disclaimer Modal */}
      {showDisclaimer && (
        <div className="f-modal">
          <div className="f-modal-content">
            <p className='modal-p'>
            While Ash P Reads Editing Services carefully vets all FrEdiBuddies also known as Independent Service Providers for reliability, professionalism, and quality standards, our role is strictly limited to providing referrals between Independent Service Providers and clients seeking their services.
              <span className="spacer"></span>
              Ash P Reads Editing Services makes no guarantee that our FrEdiBuddies will accept recommended projects, nor do we guarantee that our FrEdiBuddies will be awarded any projects for which they are referred. We do not provide or manage service contracts; all contractual arrangements must be established directly between the Independent Service Providers and clients.
              <span className="spacer"></span>
              As a referral service, Ash P Reads Editing Services does not mediate transactions, oversee service delivery, or collect any fees, commissions, or royalties from any transaction. FrEdiBuddies maintain full control over their pricing and service offerings. If you experience any issues with a Service Provider, please contact us at ashpreads@gmail.com so we may evaluate their continued inclusion in our referral network.
              <span className="spacer"></span>
              This disclaimer outlines the complete scope of our service and limitations of our responsibility. All parties agree to these terms when using our referral service.
            </p>
            <div className="f-modal-buttons">
              <button onClick={() => setShowDisclaimer(false)}>Agree</button>
              <button onClick={() => setShowDisclaimer(false)}>Disagree</button>
            </div>
          </div>
        </div>
      )}

      <FCarousel
        startIndex={selectedIndex}
        isVisible={isCarouselVisible}
        onClose={handleCloseCarousel}
      />

      <div className="f-container"
        ref={bgref}
      >
        <div className="f-wrapper">
          <div className="f-top">
            <div className="f-left">
              <h2 className="f-heading">
                Ash P Reads &nbsp;
                <span className="f-colour">FrEdiBuddies</span>
              </h2>
              <div className="fredi-desc">
                <span className='bottom-tag'>
                  A supportive platform for all Independent Service Providers.
                </span>
                <span className="spacer"></span>
                <span>
                Ash P Reads FrEdiBuddies is a collective of verified and authenticated Independent Service Providers
                </span>
                {/* <span className="spacer"></span> */}
              </div>
            </div>
            <div className="f-right">
              <div className="wheel">
                <img src={wheel} alt="wheel-image" className="wheel-img" />
              </div>
            </div>
          </div>
          <section className='fredie-section'>
            
            <div className='fredie-content'>
              <p className='fredie-text'>
                <span>
                    When Ash P started out as an independent service provider, 20 or so years ago, the market was fairly new in Pakistan. The learning curve was steep and much was learned through trial and error. Now that independent services and working remotely is recognized as a “real” job, it is an option that many prefer to a regular 9-5 career.
                </span>                  
              </p>
              {/* <span className='seperator'></span> */}
              <p className='fredie-text'>
                <span>
                    Keeping that in mind, Ash P Reads FrEdiBuddies was created to give budding independent service providers a platform to hone their skills and a safe space where projects and clients are vetted, to prevent them from falling victim to fakes and scam artists.
                </span>
              </p>
            </div>
            <div className="fredie-bg"

            >
              <div className="fredie-img">
                <FreediePara
                  src={frediebg}
                  alt='background'
                />
              </div>
            </div>
          </section>
          <div className="f-bottom">
            <div className="f-headingb">
              <p className="f-hb">Meet Our FrEdiBuddies</p>
            </div>
            <FLists onItemClick={handleItemClick} />
          </div>
        </div>
        <div className="back-gear">
          <div className="f-gear">
            <img src={gear} alt="gear-image" className="gear-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Freedie;
